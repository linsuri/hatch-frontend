import React from 'react'
import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import withAuth from '../hocs/withAuth'
import RequestMentorButton from './RequestMentorButton'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
    marginLeft: 150,
    marginRight: 150,
    position: 'relative',
    top: 80,
    zIndex: 1,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  text: {
    margin: theme.spacing.unit,
  },
})

class Browse extends React.Component {

  componentDidMount() {
    this.props.fetchAllMentors()
    this.props.fetchAllRelationships(this.props.user.id)
  }

  render() {
    const { classes } = this.props

    const allMentorsIds = (this.props.allMentors ? this.props.allMentors.map(mentor => mentor.id) : null)
    const usersMentorsIds = (this.props.user ? this.props.user.mentors.map(mentor => mentor.id) : null)
    const possibleMentorsIds = (allMentorsIds && usersMentorsIds ? allMentorsIds.filter(id => !usersMentorsIds.includes(id)) : null)
    const possibleMentorsIdsMinusSelf = (this.props.allMentors && this.props.user && possibleMentorsIds ? possibleMentorsIds.filter(id => id !== this.props.user.id) : null)
    const possibleMentors = (this.props.allMentors && this.props.user && possibleMentorsIdsMinusSelf ? this.props.allMentors.filter(mentor =>  possibleMentorsIdsMinusSelf.includes(mentor.id)) : this.props.allMentors)

    return (
      <div className={classes.root}>
        <LoggedInHeader />
        <h3>Mentors near {this.props.user.location.city}, {this.props.user.location.state}</h3>
        {!this.props.allMentors || !this.props.allRelationships ?
          null :
          (possibleMentors.map(mentor => (
            this.props.allRelationships.find(relationship => relationship.mentor.id === mentor.id) ?
            <Paper className={classes.paper} elevation={1} key={mentor.id}>
              <img src={mentor.profile_pic} alt="Profile Pic" style={{width: '150px', height: '150px', borderRadius: '5%'}} />
              <div style={{width: '75%', height: '150px', float: 'right'}}>
                <div className={classes.text}>
                  <Typography variant="headline" component="h3">
                    {mentor.first_name} {mentor.last_name}
                  </Typography>
                  <Typography variant="subheading">
                    {mentor.job_title.charAt(0).toUpperCase()}{mentor.job_title.slice(1).toLowerCase()}
                  </Typography>
                  {mentor.expertiseArray !== "" ? <Typography component="p">Expertise: {mentor.expertiseArray.split(',').join(', ')}</Typography> : null}
                  {mentor.bio !== "" ? <Typography component="p">Bio: {mentor.bio}</Typography> : null}
                  {/* LinkedIn:
                  GitHub:
                  Personal Website: */}
                </div>
                <RequestMentorButton disable={true} mentor={mentor} />
              </div>
            </Paper> :
            <Paper className={classes.paper} elevation={1} key={mentor.id}>
              <img src={mentor.profile_pic} alt="Profile Pic" style={{width: '150px', height: '150px', borderRadius: '5%'}} />
              <div style={{width: '75%', height: '150px', float: 'right'}}>
                <div className={classes.text}>
                  <Typography variant="headline" component="h3">
                    {mentor.first_name} {mentor.last_name}
                  </Typography>
                  <Typography variant="subheading">
                    {mentor.job_title.charAt(0).toUpperCase()}{mentor.job_title.slice(1).toLowerCase()}
                  </Typography>
                  {mentor.expertiseArray !== "" ? <Typography component="p">Expertise: {mentor.expertiseArray.split(',').join(', ')}</Typography> : null}
                  {mentor.bio !== "" ? <Typography component="p">Bio: {mentor.bio}</Typography> : null}
                  {/* LinkedIn:
                  GitHub:
                  Personal Website: */}
                </div>
                <RequestMentorButton disable={false} mentor={mentor} />
              </div>
            </Paper>
          )))
        }

      </div>
    )
  }
}

function mapStateToProps({ usersReducer: { user }, browseReducer: { allMentors, allRelationships } }) {
  return {
    user,
    allMentors,
    allRelationships,
  }
}

export default withAuth(compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Browse))
