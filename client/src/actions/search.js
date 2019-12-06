import axios from 'axios';
import {GET_SEARCH , SEARCH_FAILED} from './action-types';





// SEARCH FOR ALBUMS :
export const search = (name) => async dispatch => {


    try {
        const res = await axios.get(`http://localhost:4000/search/${name}` ); 
        

        dispatch({
            type : GET_SEARCH ,
            payload : res.data 
        });

        
    }catch(err){

        dispatch({
            type : SEARCH_FAILED,
            payload : {msg : err.response.statusText}
        });

    }


}


