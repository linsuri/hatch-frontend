import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import MentorsContainer from './MentorsContainer'
import MenteesContainer from './MenteesContainer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Fragment>
          <MentorsContainer />
          <MenteesContainer />
        </Fragment>
      </Fragment>
    );
  }
}

export default App;
