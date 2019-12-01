import React , {Component , Fragment  } from 'react' ; 
import {connect} from 'react-redux'
import {Link , withRouter} from 'react-router-dom'
import {register} from '../../../actions/auth';
import {dispatch} from '../../../store';

import '../Auth.css'



export  class Signup extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            userName  : '',
            email     : '',
            password  : '' , 
            password2 : ''
        }
    }

   
  

    handleReset = () => {
        this.setState({
            userName  : '',
            email     : '',
            password  : '' , 
            password2 : ''
        });
      };

    handleChange = (e) =>{
    
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state)

    }

    

    handleSubmit = (e) =>{
 
        e.preventDefault();
    
        let {userName , email , password , password2} = this.state
        console.log(this.props)
        dispatch(register({userName , email , password , password2}))
        
    

    }

    render(){


        return(
            <Fragment>
                <form onSubmit = {this.handleSubmit} id="registerForm">

                    <h2>Create your free account</h2>

                    <input id="username" name="userName" type="text" onChange = {this.handleChange} placeholder="Username"  required/>

                    <input id="email" name="email" type="email" onChange = {this.handleChange} placeholder="Email"  required/>

                    <input id="password" name="password" type="password" onChange = {this.handleChange} placeholder="Password" required/>

                    <input id="password2" name="password2" type="password"  onChange = {this.handleChange}placeholder="Confirm password" required/>

                    <button type="submit" name="registerButton" >SIGN UP</button>

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



  


export default connect()(withRouter(Signup));