import {GET_SEARCH , SEARCH_FAILED } from '../actions/action-types';


const initialState = {
    
    album : null , 
    loading :true , 
    errors : {}

}



export default function(state = initialState , action){

    
    const {type , payload} = action ; 

    switch(type){


        case  GET_SEARCH   :
            
            return {...state , album : payload , loading : false };

        case SEARCH_FAILED :
            
            return {...state ,  errors : payload , loading : false};

        default : 
            return state  ; 

    }

}