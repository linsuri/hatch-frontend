import React from 'react'
import { connect } from 'react-redux';
import * as actions from  './actions';

const Mentor = (props) => {
  console.log('Mentor props', props);
  const { first_name, last_name } = props.mentor;
  return (
    <div className="card" onClick={() => props.getMentors()}>
      {first_name}
      {last_name}
    </div>
  )
}

export default connect(null, actions)(Mentor);
