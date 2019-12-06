import axios from 'axios';
import {REGISTER_SUCCESS , REGISTER_FAIL ,LOGIN_SUCCESS , LOGIN_FAIL , USER_LOADED , AUTH_ERROR , LOGOUT} from './action-types';
import authToken from '../middleware/authToken';


//LOAD USER INFO
export const loadUser = () =>async dispatch =>{

    

    if(localStorage.token){
        authToken(localStorage.token);
    }

    try {
        let res = await axios.get('http://localhost:4000/auth');

        dispatch({
            type : USER_LOADED , 
            payload : res.data
        })

    } catch (err) {

        dispatch({
            type : AUTH_ERROR , 
        })
    }

}


// REGISTER USER :
export const register = ({userName , email , password , password2} , history ) => async dispatch => {

    
    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }


    const body = JSON.stringify({userName , email , password , password2}); 

    try {
        const res = await axios.post('http://localhost:4000/auth/register' ,body , config  ); 
        

        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data 
        });

        dispatch(loadUser())
        history.push('/home')
        
        

    }catch(err){

        dispatch({
            type : REGISTER_FAIL
        });

    }


}


// LOGIN USER :
export const login = ({email , password } , history ) => async dispatch => {

    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }


    const body = JSON.stringify({ email , password });
    
    
    try {
        const res = await axios.post('http://localhost:4000/auth/login' ,body , config  ); 
        

        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data 
        });

        dispatch(loadUser())
        history.push('/home')

    }catch(err){

        dispatch({
            type : LOGIN_FAIL
        });

    }


}


// LOGOUT USER : 

export const logout = () => async dispatch => {

    dispatch({
            type : LOGOUT
    });

}

