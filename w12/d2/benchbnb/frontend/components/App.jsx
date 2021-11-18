import React from 'react';
import GreetingContainer from './greeting_container';
import LoginContainer from './login_form_container';
import SignupContainer from './signup_form_container';
import { Route } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      < GreetingContainer />
    </header>
    <Route path="/signup" component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
    {/* <AuthRoute path="/login" component={LoginContainer} /> */}

  </div>
);

export default App;