import {CREATE_PLAYLIST , GET_PLAYLIST , GET_ONE_PLAYLIST ,  PLAYLIST_ERROR , REMOVE_PLAYLIST, ADD_TO_PLAYLIST , ADD_ERROR} from '../actions/action-types' ; 

const initialState = {
    
    playlists: [] ,
    playlist : null , 
    loading :true , 
    errors : {}
    
}


export default function(state = initialState , action){

    
    const {type , payload} = action ; 

    switch(type){
     
        case CREATE_PLAYLIST : 
        case GET_ONE_PLAYLIST:
        case REMOVE_PLAYLIST :
        case ADD_TO_PLAYLIST :

            return {...state , playlist : payload , loading : false }

        case GET_PLAYLIST    :

            return {...state , playlists : payload , loading : false }

        
            
        
        case PLAYLIST_ERROR :
        case ADD_ERROR      :

            return {...state , errors : payload , loading : false }

        default :  return state; 
    }

    

}