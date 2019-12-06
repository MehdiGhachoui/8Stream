import React  , {Component , Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import {loadUser} from './actions/auth';
import {dispatch} from './store'
import authToken from './middleware/authToken'
import Routes from './components/routes/Routes'


if (localStorage.token) {
  authToken(localStorage.token);
}

export default class App extends Component {


  // componentDidMount(){
  //   dispatch(loadUser())
  // }

  render(){
      return (
          
          <Fragment>
              <Router>
                <Switch>
                  
                  <Route  component={Routes} />
                  
                </Switch>
              </Router>
          </Fragment>
    
          
      )
    }
}
