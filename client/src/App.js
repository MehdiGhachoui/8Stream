import React  , {Component , Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import authToken from './middleware/authToken'
import Routes from './components/routes/Routes'


if (localStorage.token) {
  authToken(localStorage.token);
}

export default class App extends Component {



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
