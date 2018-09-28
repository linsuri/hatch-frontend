import React from 'react'
// import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux';
// import { compose } from 'redux';
import * as actions from  '../actions';
// import withAuth from '../hocs/withAuth'
import { API_ROOT, HEADERS } from '../constants';


const RequestMentorButton = (props) => {

  const requestMentorship = () => {
    fetch(`${API_ROOT}/api/v1/relationships`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        relationship: {
          mentee_id: props.user_id,
          mentor_id: props.mentor.id,
          accepted: false
        }
      })
    })
    .then(res => res.json())
  }

  return (
    <button onClick={requestMentorship}>
      Request Mentorship
    </button>
  )
}

function mapStateToProps(state) {
  return {
    user_id: state.usersReducer.user.id,
  }
}

export default connect(mapStateToProps, actions)(RequestMentorButton)
