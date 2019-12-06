import axios from 'axios';
import {GET_ALBUM , GET_ONE_ALBUM , ALBUM_ERROR} from './action-types';





// LOADING ALBUMS :
export const getAlbums = () => async dispatch => {



    try {
        const res = await axios.get('http://localhost:4000/home' ); 
        

        dispatch({
            type : GET_ALBUM,
            payload : res.data 
        });

        
    }catch(err){

        dispatch({
            type : ALBUM_ERROR,
            payload : {msg : err.response.statusText}
        });

    }


}




// LOAD AN ALBUM :
export const getOneAlbum = (id) => async dispatch => {



    try {
        const res = await axios.get(`http://localhost:4000/album/${id}` ); 
        
        console.log(res.data)

        dispatch({
            type : GET_ONE_ALBUM,
            payload : res.data 
        });

        
    }catch(err){

        dispatch({
            type : ALBUM_ERROR,
            payload : {msg : err.response.statusText}
        });

    }


}
