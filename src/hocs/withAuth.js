import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'

const withAuth = (WrappedComponent) => {

  class AuthorizedComponent extends React.Component {

    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else {
        return <Redirect to={{
          pathname: '/login',
          state: { currentPage: this.props.location.pathname }
        }}
      />
      }
    }
  }

  function mapStateToProps({ usersReducer: { loggedIn } }) {
    return {
      loggedIn,
    }
  }

  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default withAuth
