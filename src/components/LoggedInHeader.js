import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux';
import * as actions from  '../actions';
import Notifications from './Notifications'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import ExploreRounded from '@material-ui/icons/ExploreRounded';
import ChatRounded from '@material-ui/icons/ChatRounded';
import NotificationsRounded from '@material-ui/icons/NotificationsRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  layout: {
    width: 'auto',
    marginLeft: 130,
    marginRight: 130,
  },
  root: {
    flexGrow: 1,
    zIndex: 2,
  },
  grow: {
    flexGrow: 1,
  },
};

const LoggedInHeader = (props) => {

  console.log('LoggedInHeader', )

  const { classes } = props;
  const openProfile = Boolean(props.profileMenu);
  const openNotifications = Boolean(props.notificationsMenu);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <div className={classes.layout}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow}>
              <Link to="/" style={{ textDecoration: 'none', color:'white'}}>
              HATCH
              </Link>
            </Typography>
            <div>
              <Link to="/dashboard" style={{ color:'white'}}>
                <IconButton color="inherit">
                  <DashboardRounded />
                </IconButton>
              </Link>
              <Link to="/browse" style={{ color:'white'}}>
                <IconButton color="inherit">
                  <ExploreRounded />
                </IconButton>
              </Link>
              <Link to="/chats" style={{ color:'white'}}>
                <IconButton color="inherit">
                  <ChatRounded />
                </IconButton>
              </Link>
              {/* <Link to="/notifications" style={{ color:'white'}}> */}
              <IconButton
                aria-owns={openNotifications ? 'notifications' : null}
                aria-haspopup="true"
                onClick={(event) =>  props.openNotificationsMenu(event)}
                color="inherit">
                <NotificationsRounded />
              </IconButton>
              <Menu
                id="notifications"
                anchorEl={props.notificationsMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openNotifications}
                onClose={() => props.closeNotificationsMenu()}>
                <Notifications />
              </Menu>
              {/* </Link> */}
              <IconButton
                aria-owns={openProfile ? 'account-circle' : null}
                aria-haspopup="true"
                onClick={(event) => props.openProfileMenu(event)}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="account-circle"
                anchorEl={props.profileMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={openProfile}
                onClose={() => props.closeProfileMenu()}>
                <MenuItem onClick={() => props.closeProfileMenu}>Profile</MenuItem>
                <MenuItem onClick={() => props.logOut()}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}


LoggedInHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.usersReducer.user,
    profileMenu: state.dashboardReducer.profileMenu,
    notificationsMenu: state.dashboardReducer.notificationsMenu,
    logOut: state.usersReducer.logOut,
    // allNotifications: state.dashboardReducer.allNotifications
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(LoggedInHeader);
