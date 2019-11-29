import React , {Component , Fragment} from 'react' ; 
import {Link} from 'react-router-dom';
import '../Auth.css';


export default class Signin extends Component {

    render(){

        return(

            <Fragment>
                <form form id="loginForm">

                    <h2>Login to your account</h2>

                    <input id="loginUsername" name="loginUsername" type="text" placeholder="Username" required/>

                    <input id="loginPassword" name="loginPassword" type="password" placeholder="Password" required/>
                    
                    <button type="submit" name="loginButton">LOG IN</button>
                </form>
                
                    
                <div className="hasAccountText">
                    <span> Don't have an account yet?</span> 
                    <Link  to = '/signup'> 
                        <span className="greenLink"> Sign up </span>
                    </Link>
                </div>  
                
            </Fragment>
        )
    }
}