import React from 'react'
import LoggedInHeader from './LoggedInHeader'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import * as actions from  '../actions'
import withAuth from '../hocs/withAuth'

const AllChats = () => {
  return (
    <div>
      <LoggedInHeader />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>Chats</h1>

    </div>
  )
}

export default withAuth(AllChats)
