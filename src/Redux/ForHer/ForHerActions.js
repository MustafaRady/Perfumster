import axios from "axios";
import { ForHerPageAction } from "./ForHerReducers";

export const getWomenProducts =()=>async(dispatch)=>{
    
    try{
        dispatch(ForHerPageAction.getWomenProductsRequest());
        const response = await axios.get('url');
        dispatch(ForHerPageAction.getWomenProductsSuccess(response));

    }catch(e){
        dispatch(ForHerPageAction.getWomenProductsFailure(e.message));
    }
}

export const getRecommendedPerfumes=()=>async(dispatch)=>{
    try{
        dispatch(ForHerPageAction.getRecommendedPerfumesRequest());
        const response = await axios.get('url');
        dispatch(ForHerPageAction.getRecommendedPerfumesSuccess(response));

    }catch(err){
        dispatch(ForHerPageAction.getRecommendedPerfumesFailure(err.message));
    }
}

export const getSpecialPerfumes =()=>async(dispatch)=>{
    try{
        dispatch(ForHerPageAction.getSpecialProductsRequest());
        const response = await axios.get('url');
        dispatch(ForHerPageAction.getSpecialProductsSuccess(response));

    }catch(err){
        dispatch(ForHerPageAction.getSpecialProductsFailure(err.message));
    }
}

export const getSpecialBackgrounds = ()=>async(dispatch)=>{
    try{
        dispatch(ForHerPageAction.getSpecialBackgroundsRequest());
        const response = await axios.get('url');
        dispatch(ForHerPageAction.getSpecialBackgroundsSuccess(response));

    }catch(err){
        dispatch(ForHerPageAction.getSpecialBackgroundsFailure(err.message));
    }
}

export const getHomeSectionBackgrounds = () => async(dispatch) =>{
    try{
        dispatch(ForHerPageAction.getHomeSectionBackgroundsRequest());
        const response = await axios.get('url');
        dispatch(ForHerPageAction.getHomeSectionBackgroundsSuccess(response));

    }catch(err){
        dispatch(ForHerPageAction.getHomeSectionBackgroundsFailure(err.message));
    }
}

