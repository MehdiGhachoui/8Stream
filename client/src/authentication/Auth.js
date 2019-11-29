import React  , {Component} from 'react';
import {BrowserRouter , Route , Redirect , Switch} from 'react-router-dom';
import './Auth.css';

import Signin from './Sign(In-Up)/Signin'
import Signup from './Sign(In-Up)/Signup'

export default class Auth extends Component {

    render() {
        return(
            <div id = "background">

                <div id = "loginContainer">

                    <div id="inputContainer">

                        <BrowserRouter>
                            <Switch>
                                <Route  exact path = '/signin' component={Signin}/>
                                <Route path = '/signup' component={Signup}/>
                                <Redirect exact from="/" to="/signin" />
                            </Switch>
                        </BrowserRouter>

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