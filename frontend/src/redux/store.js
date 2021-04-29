import { applyMiddleware, combineReducers, createStore,compose } from "redux"
import thunk from "redux-thunk";
import { Products } from "./reducers/productsReducer";
import {CartItems} from "./reducers/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState={
    cart:{
        cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : []
    }
}
export const Store=()=>{
    const store=createStore(
        combineReducers({
            Products,
            cart:CartItems
        }),
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
        );
    return store;
}