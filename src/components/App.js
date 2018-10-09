import React, { Fragment } from 'react'
import './App.css'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Browse from './Browse'
import Profile from './Profile'
// import Notifications from './Notifications'
// import AllChats from './AllChats'

const App = () => {

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/chats" component={AllChats} /> */}
        <Route render={() => <Redirect to="/dashboard" />} />
      </Switch>
    </Fragment>
  )

}

export default withRouter(App)
