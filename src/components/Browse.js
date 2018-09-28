import React from 'react'
import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux';
// import { compose } from 'redux';
import * as actions from  '../actions';
import withAuth from '../hocs/withAuth'
import RequestMentorButton from './RequestMentorButton'

class Browse extends React.Component {

  componentDidMount() {
    this.props.fetchAllMentors()
  }

  render() {
    const allMentorsIds = (this.props.allMentors ? this.props.allMentors.map(mentor => mentor.id) : null)
    const usersMentorsIds = (this.props.user ? this.props.user.mentors.map(mentor => mentor.id) : null)
    const possibleMentorsIds = (allMentorsIds && usersMentorsIds ? allMentorsIds.filter(id => !usersMentorsIds.includes(id)) : null)
    const possibleMentorsIdsMinusSelf = (this.props.allMentors && this.props.user && possibleMentorsIds ? possibleMentorsIds.filter(id => id !== this.props.user.id) : null)
    const possibleMentors = (this.props.allMentors && this.props.user && possibleMentorsIdsMinusSelf ? this.props.allMentors.filter(mentor =>  possibleMentorsIdsMinusSelf.includes(mentor.id)) : this.props.allMentors)

    // console.log('this.props.allMentors', this.props.allMentors)

    return (
      <div>
        <LoggedInHeader />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Mentors near {this.props.user.location.city}, {this.props.user.location.state}</h1>
        {!this.props.allMentors ?
          null :
          <ul>
            {possibleMentors.map(mentor => (
              <li key={mentor.id}>
                {mentor.first_name} {mentor.last_name}
                <RequestMentorButton mentor={mentor} />
                {/* <button onClick={() => this.props.requestMentorship(this.props.user.id, mentor.id)}>Request Mentorship</button> */}
              </li>
            ))}
          </ul>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('Dashboard state', state);
  return {
    user: state.usersReducer.user,
    allMentors: state.browseReducer.allMentors
  }
}

export default withAuth(connect(mapStateToProps, actions)(Browse))
