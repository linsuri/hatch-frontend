import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from  '../actions';
import LoggedOutHeader from './LoggedOutHeader'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

class Login extends React.Component {

  state = {
    'email_address': '',
    'password': '',
  }

  handleChange = event => {
    // console.log('handleChange', event.target)
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleLoginSubmit = event => {
    event.preventDefault()
    this.props.logIn(this.state.email_address, this.state.password)
    this.setState({
      'email_address': '',
      'password': '',
    })
  }

  render() {
    const { classes } = this.props;
    // console.log("Login props", this.props.location.state)

    return this.props.loggedIn ? (
      <Redirect to={this.props.location.state ? this.props.location.state.currentPage : "/dashboard"} />
    ) : (
      <div className={classes.root}>
        <LoggedOutHeader />
        <Paper className={classes.paper} elevation={1}>
          <form
            onSubmit={this.handleLoginSubmit}
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
            <Button
              type="submit"
              color="primary"
              className={classes.button}>
              Log In
            </Button>
          </form>
        </Paper>
        <p style={{textAlign: 'center'}}>Don't have an account? <Link to="/login" style={{ textDecoration: 'none'}}>Sign Up</Link></p>
      </div>
    )

  }
}

Login.propTypes = {
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
)(Login);
