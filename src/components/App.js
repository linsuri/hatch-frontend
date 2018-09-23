import React, { Fragment } from 'react';
import './App.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
// import MentorsContainer from './MentorsContainer'
// import MenteesContainer from './MenteesContainer'

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

// function mapStateToProps({ usersReducer: { loggedIn } }) {
//   // console.log('App state', state);
//   return {
//     loggedIn,
//   }
// }

// export default compose(
//   withRouter,
//   connect(mapStateToProps)
// )(App);

export default withRouter(App)
