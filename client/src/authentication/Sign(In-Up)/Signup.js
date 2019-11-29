import React , {Component , Fragment} from 'react' ; 
import {Link} from 'react-router-dom'
import '../Auth.css'

export default class Signup extends Component {

    render(){

        return(
            <Fragment>
                <form  id="registerForm">

                    <h2>Create your free account</h2>

                    <input id="username" name="username" type="text" placeholder="Username"  required/>


                    <input id="firstName" name="firstName" type="text" placeholder="First name"  required/>

                    <input id="lastName" name="lastName" type="text" placeholder="Last name"  required/>

                    <input id="email" name="email" type="email" placeholder="Email"  required/>

                    <input id="password" name="password" type="password" placeholder="Password" required/>

                    <input id="password2" name="password2" type="password" placeholder="Confirm password" required/>

                    <button type="submit" name="registerButton">SIGN UP</button>

                </form>

                <div className="hasAccountText">
                    <span> Already have an account ?</span> 
                    <Link  to = '/signin'> 
                        <span className="greenLink"> Sign in </span>
                    </Link>
                </div>  
            </Fragment>
        )
    }
}