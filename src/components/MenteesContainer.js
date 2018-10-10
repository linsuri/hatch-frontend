import React from 'react'
import Mentee from './Mentee'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

const MenteesContainer = (props) => {

  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {props.mentees.map((mentee, index) => <Grid item key={index}><Mentee key={mentee.id} mentee={mentee} /></Grid>)}
      </Grid>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    mentees: state.usersReducer.user.mentees,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(MenteesContainer)
