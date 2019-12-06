import {GET_ALBUM , GET_ONE_ALBUM ,  ALBUM_ERROR} from '../actions/action-types';


const initialState = {
    
    myalbum : null , 
    albums : [], 
    loading :true , 
    errors : {}

}



export default function(state = initialState , action){

    
    const {type , payload} = action ; 

    switch(type){


        case GET_ALBUM   :
            
            return {...state , albums : payload , loading : false };

        case GET_ONE_ALBUM :
           
                return {...state , myalbum : payload , loading : false };

        case ALBUM_ERROR :
            
            return {...state ,  errors : payload , loading : false};

        default : 
            return state  ; 

    }

}