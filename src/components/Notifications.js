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

  render() {
    return (
      <div>
        <h1>Notifications</h1>
        <ul>
          {this.props.allNotifications.map((notification, index) => <li key={index}>{notification.text} from {notification.recipient.first_name} {notification.recipient.last_name}</li>)}
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
