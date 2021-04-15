import * as ActionTypes from "../ActionTypes";
export const Products=(state={
    productsLoaded:false,
    productsError:null,
    products:[]
},action)=>{
    switch(action.type){
        case ActionTypes.ADD_PRODUCTS:
            return {...state,productsLoaded:true,productsError:null,products:action.payload}
        case ActionTypes.PRODUCTS_FAILED:
            return {...state,productsLoaded:true,productsError:action.payload,products:[]}
        case ActionTypes.PRODUCTS_LOADING:
            return {...state,productsLoaded:false,productsError:null,products:[]}
        default:
            return state;
    }
}