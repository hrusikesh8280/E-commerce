import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"


const initialState={
    isLoading:false,
    products:[],
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return{...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return{...state,isLoading:false,products:payload}
        case POST_PRODUCT_SUCCESS:
            return{...state,isLoading:false}
        case PRODUCT_FAILURE:
            return{...state,isLoading:false,isError:true}
        case PATCH_PRODUCT_SUCCESS:
            return{...state,isLoading:false}
        default:
            return state
    }

}
