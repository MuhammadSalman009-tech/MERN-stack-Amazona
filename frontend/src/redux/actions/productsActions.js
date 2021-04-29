import * as ActionTypes from "../ActionTypes";
import axios from "axios";
export const fetchProducts=()=>dispatch=>{
    dispatch(productsLoading())
    try {
        return axios.get('/api/products')
        .then(res=>{
            const products=res.data;
            dispatch(addProducts(products))
        })
        .catch(error=>{
            dispatch(productsFailed(error));
        })
    } catch (error) {
        console.log(error.message);
    }
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
