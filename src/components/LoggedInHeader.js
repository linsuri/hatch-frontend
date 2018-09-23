import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import * as actions from  '../actions/actions';

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
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
};

const LoggedInHeader = (props) => {
  // console.log('LoggedInHeader props', props)
  const { classes } = props;
  const open = Boolean(props.profileMenu);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <div className={classes.layout}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="title" color="inherit" className={classes.grow}>
              HATCH
            </Typography>
            <div>
              <IconButton
                color="inherit"
              >
                <DashboardRounded />
              </IconButton>
              <IconButton
                color="inherit"
              >
                <ExploreRounded />
              </IconButton>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={(event) => props.openProfileMenu(event)}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={props.profileMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={() => props.closeProfileMenu()}
              >
                <MenuItem onClick={() => props.closeProfileMenu()}>Profile</MenuItem>
                <MenuItem onClick={() => props.closeProfileMenu()}>My account</MenuItem>
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
    profileMenu: state.profileMenu,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(LoggedInHeader);
