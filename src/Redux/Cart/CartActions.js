import { CartPageActions } from "./CartReducers";

export const getCartData = ()=>(dispatch)=>{
    try{
        dispatch(CartPageActions.getCartDataRequest());
        dispatch(CartPageActions.getCartDataSuccess());

    }catch(err){
        dispatch(CartPageActions.getCartDataFailure(err.message));
    }
}


export const addToCart = (item)=>(dispatch)=>{
    try{
        dispatch(CartPageActions.addToCartRequest());
        dispatch(CartPageActions.addToCartSuccess(item));

    }catch(err){
        dispatch(CartPageActions.addToCartFailure(err.message));
    }
}

export const updateCart = (item) => (dispatch)=>{
    try{
        dispatch(CartPageActions.updateCartRequest());
        dispatch(CartPageActions.updateCartSuccess(item));

    }catch(err){
        dispatch(CartPageActions.updateCartFailure(err.message));
    }
}

export const removeFromCart = (item) => (dispatch)=>{
    try{
        dispatch(CartPageActions.removeFromCartRequest());
        dispatch(CartPageActions.removeFromCartSuccess(item));

    }catch(err){
        dispatch(CartPageActions.removeFromCartFailure(err.message));
    }
}