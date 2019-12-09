import React , {Component   } from 'react' ; 
import {Link, withRouter } from 'react-router-dom'
import {register} from '../../actions/auth';
import {dispatch} from '../../store';
import islogedIn from '../../middleware/isLoged'


import './Auth.css'



class Signup extends Component {
    

    constructor() {
        super();

        this.state = {
            userName  : '',
            email     : '',
            password  : '' , 
            password2 : '' , 
        }
    }

    componentDidMount() {
        if (islogedIn()) {
          this.props.history.push('/home');
        }
    }
    

    handleChange = (e) =>{
    
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state)

    }

    

    handleSubmit = (e) =>{
 
        e.preventDefault()
    
        let {userName , email , password , password2} = this.state
        const history = this.props.history
        dispatch(register({userName , email , password , password2} , history ))
        
        
    }

    render(){

        return(
            <div id = "background">
                <div id = "loginContainer">
                    <div id="inputContainer">

                        <form onSubmit = {this.handleSubmit} id="registerForm">

                            <h2>Create your free account</h2>

                            <input id="username" name="userName" type="text"   onChange = {this.handleChange} placeholder="Username"  required/>

                            <input id="email" name="email" type="email"   onChange = {this.handleChange} placeholder="Email"  required/>

                            <input id="password" name="password" type="password" min="8"  onChange = {this.handleChange} placeholder="Password" required/>

                            <input id="password2" name="password2" type="password" min="8"  onChange = {this.handleChange}placeholder="Confirm password" required/>

                            <button type="submit" name="registerButton" >SIGN UP</button>

                            </form>

                            <div className="hasAccountText">
                                <span> Already have an account ?</span> 
                                <Link  to = '/signin'> 
                                    <span className="greenLink"> Sign in </span>
                                </Link>
                            </div>  
                        
                    </div>

                    <div id="loginText">
                        <h1>Get great music, right now</h1>
                        <h2>Listen to loads of songs for free</h2>
                        <ul>
                            <li>Discover music you'll fall in love with</li>
                            <li>Create your own playlists</li>
                            <li>Follow artists to keep up to date</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Signup)