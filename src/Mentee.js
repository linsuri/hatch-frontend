import React from 'react'
import { connect } from 'react-redux';
import * as actions from  './actions';

const Mentee = (props) => {
  console.log('Mentee props', props);
  const { first_name, last_name } = props.mentee;
  return (
    <div className="card" onClick={() => props.getMentees()}>
      {first_name}
      {last_name}
    </div>
  )
}

export default connect(null, actions)(Mentee);
