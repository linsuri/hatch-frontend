import React from 'react'
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { ActionCable } from 'react-actioncable-provider';
import * as actions from  '../actions';
// import withAuth from '../hocs/withAuth'
import { API_ROOT } from '../constants';

class Notifications extends React.Component {

  componentDidMount() {
    this.props.fetchAllNotifications(this.props.user.id)
  }

  parseAllNotifications = (allNotifications) => {
    return (
      allNotifications.map((notification, index) => {
        if (notification.text === 'mentorship request') {
          return (
            <li key={index}>
              {notification.sender.first_name} {notification.sender.last_name} would like to ask for your mentorship.
              <button onClick={() => this.props.acceptRequest(this.props.user.id, notification.sender.id)}>Accept</button>
              <button onClick={() => this.props.declineRequest(this.props.user.id, notification.sender.id)}>Decline</button>
            </li>
          )
        // } else if (notification.text === 'sent mentorship request') {
        //   return (
        //     <li key={index}>You have successfully requested mentorship from {notification.sender.first_name} {notification.sender.last_name}</li>
        //   )
        }
      })
    )
  }

  render() {
    return (
      <div>
        <h1>Notifications</h1>
        <ul>
          {this.parseAllNotifications(this.props.allNotifications)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    allNotifications: state.dashboardReducer.allNotifications,
  }
}

export default connect(mapStateToProps, actions)(Notifications)
