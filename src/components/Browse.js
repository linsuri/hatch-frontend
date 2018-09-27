import React from 'react'
import LoggedInHeader from './LoggedInHeader'
import { connect } from 'react-redux';
// import { compose } from 'redux';
import * as actions from  '../actions';
import withAuth from '../hocs/withAuth'

class Browse extends React.Component {

  componentDidMount() {
    this.props.fetchAllMentors()
  }

  render() {
    console.log('browser props', this.props)

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
            {this.props.allMentors.map(mentor => (
              <li key={mentor.id}>
                {mentor.first_name} {mentor.last_name}
                <button onClick={() => this.props.requestMentorship(this.props.user.id, mentor.id)}>Request Mentorship</button>
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
    allMentors: state.browserReducer.allMentors
  }
}

export default withAuth(connect(mapStateToProps, actions)(Browse))
