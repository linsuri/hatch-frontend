import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  layout: {
    width: 'auto',
    marginLeft: 130,
    marginRight: 130,
  },
  root: {
    flexGrow: 1,
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
    // <div className="header">
    //   <div className="headerInner">
    //     <div className="logo">
    //       <h1>HATCH</h1>
    //     </div>
    //     <div className="logInSignUp">
    //       <h1>Log In / Sign Up</h1>
    //     </div>
    //   </div>
    // </div>
    // <div>
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
            <Button variant="contained" color="primary">Log In</Button>
            <Button color="inherit">Sign Up</Button>
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
