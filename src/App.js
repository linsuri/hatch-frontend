import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'
import MentorsContainer from './MentorsContainer'
import MenteesContainer from './MenteesContainer'

const App = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <Router>
        <Fragment>
          <LoggedInHeader />
          <Fragment>
            <MentorsContainer />
            <MenteesContainer />
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
