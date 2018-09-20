import React from 'react'
import Mentor from './Mentor'
import { connect } from 'react-redux';

const MentorsContainer = ({ mentors }) => {
  console.log('Arrays of all mentors', mentors)
  return (
    <div className="mentorsContainer">
      {mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor} />)}
    </div>
  )
}

function mapStateToProps(state) {
  console.log('MentorsContainer state', state);
  return {
    mentors: state.mentors,
  }
}

export default connect(mapStateToProps)(MentorsContainer);
