import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import LoggedOutHeader from './LoggedOutHeader'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
})

class Signup extends React.Component {

  state = {
    'email_address': '',
    'password': '',
    'first_name': '',
    'last_name': '',
  }

  handleChange = event => {
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

  errorFlash = error => {
    alert(error)
    this.props.closeAlertError()
  }

  render() {
    const { classes, loggedIn, error, location } = this.props
    const { email_address, password, first_name, last_name } = this.state

    if (loggedIn) {
      return <Redirect to={location.state ? location.state.currentPage : "/dashboard"} />
    } else {
      return (
        <div className={classes.root}>
          {error ? this.errorFlash(error) : null}
          <LoggedOutHeader />
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="headline" component="h3">
              Sign up to start your career journey with the help of the community of your professions.
            </Typography>
            <form
              onSubmit={this.handleSignupSubmit}
              className={classes.container}
              noValidate
              autoComplete="off">
              <TextField
                id="email_address"
                label="Email Address"
                value={email_address}
                onChange={this.handleChange}
                className={classNames(classes.textField, classes.dense)}
                margin="dense" />
              <TextField
                id="password"
                label="Password"
                value={password}
                onChange={this.handleChange}
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal" />
              <TextField
                id="first_name"
                label="First Name"
                value={first_name}
                onChange={this.handleChange}
                className={classNames(classes.textField, classes.dense)}
                margin="dense" />
              <TextField
                id="last_name"
                label="Last Name"
                value={last_name}
                onChange={this.handleChange}
                className={classNames(classes.textField, classes.dense)}
                margin="dense" />
              <Button
                type="submit"
                color="primary"
                className={classes.button}>
                Sign Up
              </Button>
            </form>
            <Typography component="p">
              By signing up, you agree to our <Link to="/login" style={{ textDecoration: 'none'}}>Terms, Data Policy</Link> and <Link to="/login" style={{ textDecoration: 'none'}}>Cookies Policy</Link>.
            </Typography>
          </Paper>
          <p style={{textAlign: 'center'}}>Have an account? <Link to="/login" style={{ textDecoration: 'none'}}>Log In</Link></p>
        </div>
      )
    }
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({ usersReducer: { loggedIn, error } }) => {
  return {
    loggedIn,
    error,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Signup)
