import axios from "axios";
import * as ActionTypes from "../ActionTypes";
export const addToCart=(productID,qty)=>async(dispatch,getState)=>{
    try {
        const {data}=await axios.get(`/api/products/${productID}`)
        dispatch({
            type:ActionTypes.CART_ADD_ITEM,
            payload:{
                name:data.name,
                price:data.price,
                image:data.image,
                quantity:data.quantity,
                product:data._id,
                qty
            }
        })
        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.log("add to cart error");
        console.log(error);
    }
}

export const removeFromCart=(id)=>((dispatch,getState)=>{
    dispatch({
        type:ActionTypes.CART_REMOVE_ITEM,
        payload:id
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
})