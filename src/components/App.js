import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ActionCable } from 'react-actioncable-provider'
import * as actions from  '../actions'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Browse from './Browse'
import Profile from './Profile'

const App = (props) => {

  return (
    <Fragment>
      <ActionCable
        channel={{ channel: 'NotificationsChannel' }}
        onReceived={props.receivedNotifications} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/profile" component={Profile} />
        <Route render={() => <Redirect to="/dashboard" />} />
      </Switch>
      <p style={{zIndex: 2, margin: 0, position: 'fixed', bottom: 0, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>Hatch 2018 by Lin Sriuthenchai</p>
    </Fragment>
  )
}

export default compose(
  withRouter,
  connect(null, actions)
)(App)
