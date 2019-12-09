import React , {Component } from 'react' ; 
import {Link , Redirect  , withRouter} from 'react-router-dom';
import {login} from '../../actions/auth';
import {dispatch} from '../../store';
import islogedIn from '../../middleware/isLoged'
import './Auth.css';

class Signin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email     : '',
            password  : '' ,
        };


        
    }


    componentDidMount() {
        if (islogedIn()) {
          this.props.history.push('/home');
        }
    }
    
    handleChange = (e) =>{

        this.setState({[e.target.name] : e.target.value});
    }

    

    handleSubmit = (e) =>{
 
        e.preventDefault();
        console.log(this.props)
        
        let {email , password } = this.state
        const history = this.props.history
        dispatch(login( {email , password } , history ))
        

        
    }


    render(){

        console.log(this.state)
        
        if(islogedIn()){
            return <Redirect to = '/home'/>
        }        


        return(

            <div id = "background">

                <div id = "loginContainer">

                    <div id="inputContainer">

                        <form onSubmit = {this.handleSubmit} id="loginForm">

                            <h2>Login to your account</h2>

                            <input id="email" name="email" type="email"  onChange = {this.handleChange} placeholder="Email"  required/>

                            <input id="password" name="password" min="8"  onChange = {this.handleChange} type="password" placeholder="Password" required/>
                            
                            <button type="submit" name="loginButton">LOG IN</button>
                        </form>
                        
                            
                        <div className="hasAccountText">
                            <span> Don't have an account yet?</span> 
                            <Link  to = '/signup'> 
                                <span className="greenLink"> Sign up </span>
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


export default withRouter(Signin)