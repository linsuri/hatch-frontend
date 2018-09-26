import React from 'react'
import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux';
// import { compose } from 'redux';
import * as actions from  '../actions';
import withAuth from '../hocs/withAuth'

const Browse = (props) => {
  console.log('browser props', props)
  return (
    <div>
      <LoggedInHeader />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>Mentors near {props.user.location.city}, {props.user.location.state}</h1>

    </div>
  )
}

function mapStateToProps(state) {
  // console.log('Dashboard state', state);
  return {
    user: state.usersReducer.user,
  }
}

export default withAuth(connect(mapStateToProps, actions)(Browse))
