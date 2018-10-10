import React from 'react'
import Mentor from './Mentor'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

const MentorsContainer = (props) => {

  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {props.mentors.map((mentor,index) => <Grid item key={index}><Mentor key={mentor.id} mentor={mentor} /></Grid>)}
      </Grid>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    mentors: state.usersReducer.user.mentors,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(MentorsContainer)
