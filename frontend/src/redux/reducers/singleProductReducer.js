import * as ActionTypes from "../ActionTypes";
export const SingleProduct=(state={
    singleProductLoaded:false,
    singleProductError:null,
    product:{}
},action)=>{
    switch(action.type){
        case ActionTypes.ADD_SINGLE_PRODUCT:
            return {...state,singleProductLoaded:true,singleProductError:null,product:action.payload}
        case ActionTypes.SINGLE_PRODUCT_FAILED:
            return {...state,singleProductLoaded:true,singleProductError:action.payload,products:{}}
        case ActionTypes.SINGLE_PRODUCT_LOADING:
            return {...state,singleProductLoaded:false,singleProductError:null,product:{}}
        default:
            return state;
    }
}