import axios from 'axios';
import {REGISTER_SUCCESS , REGISTER_FAIL , USER_LOADED , AUTH_ERROR} from './action-types';
import authToken from '../middleware/authToken';


//LOAD USER INFO
export const loadUser = () =>async dispatch =>{

    console.log(localStorage.token);

    if(localStorage.token){
        authToken(localStorage.token);
    }

    try {
        let res = await axios.get('http://localhost:4000/auth');

        dispatch({
            type : USER_LOADED , 
            payload : res.data
        })

    } catch (error) {

        dispatch({
            type : AUTH_ERROR , 
        })
    }

}


// REGISTER USER :
export const register = ({userName , email , password , password2}) => async dispatch => {

    console.log({userName , email , password , password2})
    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }


    const body = JSON.stringify({userName , email , password , password2}); 

    try {
        const res = await axios.post('http://localhost:4000/auth/register' ,body , config  ); 
        console.log(res.data)

        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data 
        });
        

    }catch(err){

        dispatch({
            type : REGISTER_FAIL
        });

    }


}




