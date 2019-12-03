import React , {Fragment}from 'react';
import { Route , Switch , Redirect  , withRouter} from 'react-router-dom';
import Dashboard from '../composants/dashboard/Dashboard';
// import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoutes';
import Signin from '../authentication/Signin'
import Signup from '../authentication/Signup'

const Routes = () => {
  return (
    <Fragment >
      <Switch>

        <Redirect exact from="/" to="/signin" />
        <Route  path='/signup' component={withRouter( Signup)} />
        <Route  path='/signin' component={withRouter(Signin)} />
        <PrivateRoute   path='/home' component={Dashboard} />
        {/* <Route component={NotFound} /> */}
      </Switch>
        
      
    </Fragment>
  );
};

export default Routes;