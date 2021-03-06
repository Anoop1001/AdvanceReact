
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Cart from "../components/Cart";
import * as actions from "../state/actions";

// no state needed by cart component

// const mapStateToProps = (state) => {
//     return {
         
//     }
// }

// state is input, passed by container
// this function called first time when component created
// whenever there is subscribe called inside container
// container shall this method, this method to return props [for react] from state [redux]
const mapStateToProps = (state) => {
    return {
        total: state.cart.items.length
    }
}

// called only once per instance
export const mapDispatchToProps = (dispatch) => {
    return {
        // actions is object, that contains
        // all the binded methods
        // which can dispatch
        // comp => props.actions.addItem()
        // comp => props.actions.empty(), shall dispatch
        actions: bindActionCreators(actions, dispatch),

        // props.addItem
        //Till we get product data
        addItem: function () {
            let id = 1;
            let item = {
                id, // syntatic sugar id: id
                name: `Product ${id}`,
                price:  100,
                qty: 1
            }

            dispatch(actions.addItem(item));
        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Cart)
