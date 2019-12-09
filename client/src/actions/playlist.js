import axios from 'axios';
import {CREATE_PLAYLIST , GET_PLAYLIST , PLAYLIST_ERROR, GET_ONE_PLAYLIST , REMOVE_PLAYLIST , ADD_TO_PLAYLIST , ADD_ERROR} from '../actions/action-types' ;





// CREATE A PLAYLIST
export const createPlaylist = ({userID , alert} , history) => async dispatch => {

    

    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }


    const body = JSON.stringify({userID , alert}); 
    
   


    try {
        const res = await axios.post('http://localhost:4000/playlist', body , config ); 
        
        dispatch({
            type : CREATE_PLAYLIST,
            payload : res.data 
        });

        history.push({ pathname: "/" });
        history.replace({ pathname: "/playlist" });
        

    }catch(err){

        dispatch({
            type : PLAYLIST_ERROR,
            payload : {msg : err.response.statusText}
        });

    }


}


// GET ALL USER PLAYLISTS
export const getPlaylists = (id) => async dispatch => {


    

    try {

        const res = await axios.get(`http://localhost:4000/playlist/all/${id}` ); 
        

        
        dispatch({
            type : GET_PLAYLIST,
            payload : res.data 
        });

        
    }catch(err){

        dispatch({
            type : PLAYLIST_ERROR,
            payload : {msg : err.response.statusText}
        });

    }


}


// GET  Playlist INFO :
export const getPlaylistInfo = (id) => async dispatch => {



    try {
        const res = await axios.get(`http://localhost:4000/playlist/${id}` ); 
        
        console.log(res.data)

        dispatch({
            type : GET_ONE_PLAYLIST,
            payload : res.data 
        });

        
    }catch(err){

        dispatch({
            type : PLAYLIST_ERROR,
            // payload : {msg : err.response.statusText}
        });

    }


}


// REMOVE A PLAYLIST :
export const removePlaylist = (id , history ) => async dispatch => {

    history.push('/playlist')

    

    try {
        const res = await axios.delete(`http://localhost:4000/playlist/${id}` ); 
        

        dispatch({
            type : REMOVE_PLAYLIST,
            payload : res.data 
        })
    
        


       

        
    }catch(err){

        dispatch({
            type : PLAYLIST_ERROR,
            // payload : {msg : err.response.statusText}
        });

    }


}


// ADD SONG TO A PLAYLIST
export const addToPlaylist = ({songID,userID , playlistID } ) => async dispatch => {


    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }

    

    const body = JSON.stringify({songID , userID , playlistID} ); 
    
   console.log(body)


    try {
        const res = await axios.put('http://localhost:4000/playlist', body , config ); 
        
        dispatch({
            type : ADD_TO_PLAYLIST,
            payload : res.data 
        });

       

    }catch(err){

        dispatch({
            type : ADD_ERROR,
            payload : {msg : err.response.statusText}
        });

    }


}