import React from 'react'
// import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { ActionCable } from 'react-actioncable-provider';
// import * as actions from  '../actions';
// import withAuth from '../hocs/withAuth'
import { API_ROOT } from '../constants';


let user = null
let allRelationships = null

class Notifications extends React.Component {

  state = {
    allNotifications: [],
  }

  componentDidMount = () => {
    fetch(`${API_ROOT}/api/v1/users`)
    .then(res => res.json())
    .then(json => user = json.find(user => user.id === this.props.user.id))
    .then(json => allRelationships = [ ...user.active_relationships, ...user.passive_relationships ])
    .then(this.setState({
    allNotifications: [ ...this.state.allNotifications, allRelationships ]

      // relationship.mentor.id === this.props.user.id).find(relationship => relationship.mentee.id === this.props.mentee.id),
      // messages: json.filter(relationship => relationship.mentor.id === this.props.user.id).find(relationship => relationship.mentee.id === this.props.mentee.id).messages,
    }))
  };

  handleReceivedNotifications = (response) => {
    const { notification } = response
    this.setState({
      allNotifications: [ ...this.state.allNotifications, notification ]
    }, () => console.log('setting state of notifications', this.state.allNotifications))
  }

  render() {
    console.log('Notifications components state', this.state)
    return (
      <div>
        <h1>Notifications</h1>
        <ActionCable
          channel={{ channel: 'NotificationsChannel' }}
          onReceived={this.handleReceivedNotifications}
        />
        <ul>{this.state.allNotifications.map(relationship => <li>notification</li>)}</ul>
        {/* {acceptedRequests.map(request => <MenuItem key={request.id}>{request.}</MenuItem>)} */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
  }
}

export default connect(mapStateToProps, null)(Notifications)
