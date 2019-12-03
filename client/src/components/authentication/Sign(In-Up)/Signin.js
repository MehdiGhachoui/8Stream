import React , {Component , Fragment} from 'react' ; 
import {Link , Redirect} from 'react-router-dom';
import {login} from '../../../actions/auth';
import {dispatch} from '../../../store';
import islogedIn from '../../../middleware/isLoged'
import '../Auth.css';


export  class Signin extends Component {

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

        let {email , password } = this.state
        dispatch(login( email , password ))
        this.props.history.push('/home');

        
    }


    render(){

        console.log(this.state)
        
        if(islogedIn()){
            return <Redirect to = '/home'/>
        }        


        return(

            <Fragment>
                <form onSubmit = {this.handleSubmit} id="loginForm">

                    <h2>Login to your account</h2>

                    <input id="email" name="email" type="email" onChange = {this.handleChange} placeholder="Email"  required/>

                    <input id="loginPassword" name="password" onChange = {this.handleChange} type="password" placeholder="Password" required/>
                    
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


