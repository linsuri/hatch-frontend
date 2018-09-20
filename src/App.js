import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'
import Dashboard from './Dashboard'
// import MentorsContainer from './MentorsContainer'
// import MenteesContainer from './MenteesContainer'

const App = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <Router>
        <Fragment>
          <LoggedInHeader />
          <Fragment>
            <Dashboard />
          </Fragment>
        </Fragment>
      </Router>
    );
  } else {
    return (
      <Router>
        <Fragment>
          <LoggedOutHeader />
          <Fragment>


          </Fragment>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log('App state', state);
  return {
    loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(App);
