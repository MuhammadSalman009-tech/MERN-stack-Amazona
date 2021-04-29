import * as ActionTypes from "../ActionTypes";
export const CartItems=(state={
    cartItems:[]
},action)=>{
    switch (action.type) {
        case ActionTypes.CRAT_ADD_ITEM:
            const item=action.payload;
            const existingItem=state.cartItems.find(x=>x.product===item.product);
            if(existingItem){
                return {...state,cartItems:state.cartItems.map(x=>x.product===item.product ? item : x)}
            }else{
                return {...state,cartItems:[...state.cartItems,item]}
            }
        default:
            return state;
    }
}