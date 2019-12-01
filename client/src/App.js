import React  , {Component} from 'react';
import './App.css';
import {Auth} from './components/authentication/Auth'
import {loadUser} from './actions/auth';
import {dispatch} from './store'
import authToken from './middleware/authToken'


if (localStorage.token) {
  authToken(localStorage.token);
}

export default class App extends Component {


  componentDidMount(){

    console.log('hello')
    dispatch(loadUser())
  }

  render(){
      return (
        <div className="App">

          <Auth/>
          
        </div>
      );
    }
}
