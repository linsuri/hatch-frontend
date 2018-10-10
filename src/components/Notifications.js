import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import withAuth from '../hocs/withAuth'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    width: 350,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class Notifications extends React.Component {

  parseAllNotifications = (notifications) => {
    const { classes } = this.props
    return (
      notifications.map((notification, index) => {
        let final = null
        if (notification.text === 'mentorship request') {
          final = (
            <ListItem style={{display: 'block'}} key={index}>
              <p style={{marginLeft: '10px', marginRight: '10px'}}>{notification.sender.first_name} {notification.sender.last_name} would like to ask for your mentorship.</p>
              <Button variant="contained" color="primary" className={classes.button} onClick={() => this.props.acceptRequest(this.props.user.id, notification.sender.id)}>Accept</Button>
              <Button variant="contained" color="primary" className={classes.button} onClick={() => this.props.declineRequest(this.props.user.id, notification.sender.id)}>Decline</Button>
            </ListItem>
          )
        } else {
          final = (
            <li key={index}>{notification.sender.first_name} {notification.sender.last_name} has accepted your request.</li>
          )
        }
        return final
      })
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <List component="nav">
          {this.parseAllNotifications(this.props.notifications)}
        </List>
      </div>
    )
  }
}

function mapStateToProps({ usersReducer: { user, notifications } }) {
  return {
    user,
    notifications,
  }
}

export default withAuth(compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Notifications))
