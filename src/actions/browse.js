export const fetchAllMentors = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(json => json.filter(user => user.mentor_status === true && user.location.city === 'New York' && user.location.state === 'NY'))
    .then(mentors => dispatch(setAllMentors(mentors)))
  }
}

export function setAllMentors(mentors) {
  return {
    type: 'SET_ALL_MENTORS',
    payload: mentors,
  }
}

export const requestMentorship = (mentee_id, mentor_id) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/relationships", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        relationship: {
          mentee_id: mentee_id,
          mentor_id: mentor_id,
          accepted: false,
        }
      })
    })
  }
}

export const fetchAllRelationships = (user_id) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/relationships")
    .then(res => res.json())
    .then(json => json.filter(relationship => relationship.mentee.id === user_id))
    // .then(console.log)
    .then(relationships => {
      dispatch(setAllRelationships(relationships))
    })
  }
}

export function setAllRelationships(relationships) {
  return {
    type: 'SET_ALL_RELATIONSHIPS',
    payload: relationships,
  }
}
