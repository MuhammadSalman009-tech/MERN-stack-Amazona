import { applyMiddleware, combineReducers, createStore,compose } from "redux"
import thunk from "redux-thunk";
import { Products } from "./reducers/productsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store=()=>{
    const store=createStore(
        combineReducers({
            Products
        }),
        composeEnhancers(
            applyMiddleware(thunk)
        )
        );
    return store;
}