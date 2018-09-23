import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'

const App = () => {

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Fragment>
  );

}

export default withRouter(App)
