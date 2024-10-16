import { ForHimPageAction } from "./ForHimReducers";
import axios from "axios";

export const getMenProducts =()=>async(dispatch)=>{
        
        try{
            dispatch(ForHimPageAction.getMenProductsRequest());
            const response = await axios.get('url');
            dispatch(ForHimPageAction.getMenProductsSuccess(response));
    
        }catch(e){
            dispatch(ForHimPageAction.getMenProductsFailure(e.message));
        }
}

export const getRecommendedPerfumes = () => async(dispatch)=>{
    try{
        dispatch(ForHimPageAction.get());
        const response = await axios.get('url');
        dispatch(ForHimPageAction.getRecommendedPerfumesSuccess(response));

    }catch(err){
        dispatch(ForHimPageAction.getRecommendedPerfumesFailure(err.message));
    }
}

export const getSpecialPerfumes = ()=>async(dispatch)=>{
    try{
        dispatch(ForHimPageAction.getSpecialProductsRequest());
        const response = await axios.get('url');
        dispatch(ForHimPageAction.getSpecialProductsSuccess(response));

    }catch(err){
        dispatch(ForHimPageAction.getSpecialProductsFailure(err.message));
    }
}

export const getSpecialBackgrounds = ()=>async(dispatch)=>{
    try{
        dispatch(ForHimPageAction.getSpecialBackgroundsRequest());
        const response = await axios.get('url');
        dispatch(ForHimPageAction.getSpecialBackgroundsSuccess(response));

    }catch(err){
        dispatch(ForHimPageAction.getSpecialBackgroundsFailure(err.message));
    }
}

export const getHomeSectionBackgrounds=()=>async(dispatch)=>{
    try{
        dispatch(ForHimPageAction.getHomeSectionBackgroundsRequest());
        const response = await axios.get('url');
        dispatch(ForHimPageAction.getHomeSectionBackgroundsSuccess(response));

    }catch(err){
        dispatch(ForHimPageAction.getHomeSectionBackgroundsFailure(err.message));
    }
}