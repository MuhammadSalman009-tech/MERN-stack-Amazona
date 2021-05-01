import * as ActionTypes from "../ActionTypes";
import axios from "axios";
export const fetchSingleProduct=(id)=>(dispatch)=>{
    dispatch(singleProductLoading())
    try {
        return axios.get(`/api/products/${id}`)
        .then(res=>{
            const product=res.data;
            dispatch(addSingleProduct(product))
        })
        .catch(error=>{
            dispatch(singleProductFailed(error));
        })
    } catch (error) {
        console.log(error.message);
    }
}
export const singleProductLoading=()=>({
    type:ActionTypes.SINGLE_PRODUCT_LOADING
})
export const singleProductFailed=(errorMsg)=>({
    type:ActionTypes.SINGLE_PRODUCT_FAILED,
    payload:errorMsg
})
export const addSingleProduct=(product)=>({
    type:ActionTypes.ADD_SINGLE_PRODUCT,
    payload:product
})