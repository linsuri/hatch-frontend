import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from  '../actions';
import LoggedOutHeader from './LoggedOutHeader'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: 'auto',
    marginLeft: 130,
    marginRight: 130,
  },
  paper: {
    ...theme.mixins.gutters(),
    width: '50%',
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Signup extends React.Component {

  state = {
    'email_address': '',
    'password': '',
    'first_name': '',
    'last_name': '',
  }

  handleChange = event => {
    // console.log('handleChange', event.target)
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSignupSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state.email_address, this.state.password, this.state.first_name, this.state.last_name)
    this.setState({
      'email_address': '',
      'password': '',
      'first_name': '',
      'last_name': '',
    })
  }

  render() {
    const { classes } = this.props;

    return this.props.loggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <div className={classes.root}>
        <LoggedOutHeader />
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            Sign up to start your career journey with the help of the community of your professions.
          </Typography>
          <form
            onSubmit={this.handleSignupSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email_address"
              label="Email Address"
              value={this.state.email_address}
              onChange={this.handleChange}
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
            <TextField
              id="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <TextField
              id="first_name"
              label="First Name"
              value={this.state.first_name}
              onChange={this.handleChange}
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
            <TextField
              id="last_name"
              label="Last Name"
              value={this.state.last_name}
              onChange={this.handleChange}
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
            <Button
              type="submit"
              color="primary"
              className={classes.button}>
              Sign Up
            </Button>
          </form>
          <Typography component="p">
            By signing up, you agree to our <a href='#'>Terms, Data Policy</a> and <a href='#'>Cookies Policy</a>.
          </Typography>
        </Paper>
        <p style={{textAlign: 'center'}}>Have an account? Log In</p>
      </div>
    )

  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ usersReducer: { loggedIn } }) => {
  // console.log("Signup state", state)
  return {
    loggedIn,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Signup);
