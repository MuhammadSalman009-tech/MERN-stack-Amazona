import * as ActionTypes from "./ActionTypes";
import products from "../data";
export const fetchProducts=()=>dispatch=>{
    dispatch(productsLoading())
    setTimeout(()=>{
        dispatch(addProducts(products))
    },2000)
}
export const productsLoading=()=>({
    type:ActionTypes.PRODUCTS_LOADING
})
export const productsFailed=(errorMsg)=>({
    type:ActionTypes.PRODUCTS_FAILED,
    payload:errorMsg
})
export const addProducts=(products)=>({
    type:ActionTypes.ADD_PRODUCTS,
    payload:products
})
