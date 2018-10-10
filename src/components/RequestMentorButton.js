import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import { API_ROOT, HEADERS } from '../constants'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class RequestMentorButton extends React.Component {

  state = {
    disabled: false,
  }

  requestMentorship = (event) => {
    fetch(`${API_ROOT}/api/v1/relationships`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        relationship: {
          mentee_id: this.props.user.id,
          mentor_id: this.props.mentor.id,
          accepted: false
        }
      })
    })
    this.setState({
      disabled: true,
    })
  }

  render() {

    const { classes } = this.props

    if (this.state.disabled === true || this.props.disable === true) {
      return (
        <Button
          variant="contained"
          color="secondary"
          disabled
          className={classes.button}
          style={{display: 'block'}}>
          Requested Mentorship
        </Button>
      )
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.requestMentorship}
          style={{display: 'block'}}>
          Request Mentorship
        </Button>
      )
    }
  }

}

RequestMentorButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps({ usersReducer: { user } }) {
  return {
    user,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(RequestMentorButton)
