import React from 'react'
import Mentee from './Mentee'
import { connect } from 'react-redux';

const MenteesContainer = ({ mentees }) => {
  console.log('Arrays of all mentees', mentees)
  return (
    <div className="menteesContainer">
      {mentees.map(mentee => <Mentee key={mentee.id} mentee={mentee} />)}
    </div>
  )
}

function mapStateToProps(state) {
  console.log('MenteesContainer state', state);
  return {
    mentees: state.mentees,
  }
}

export default connect(mapStateToProps)(MenteesContainer);
