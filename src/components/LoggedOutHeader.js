import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';

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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const LoggedOutHeader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <div className={classes.layout}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow}>
              HATCH
            </Typography>
            <Link to="/login" style={{ textDecoration: 'none', color:'white'}}>
              <Button variant="contained" color="primary">
                Log In
              </Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none', color:'white'}}>
              <Button color="inherit" >
                Sign Up
              </Button>
            </Link>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}

LoggedOutHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedOutHeader);
