export const fetchAllMentors = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(json => json.filter(user => user.mentor_status === true && user.location.city === 'New York' && user.location.state === 'NY'))
    .then(mentors => dispatch(setAllMentors(mentors)))
  }
}

export function setAllMentors(userData) {
  return {
    type: 'SET_ALL_MENTORS',
    payload: userData,
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
        relationships: {
          mentee_id: mentee_id,
          mentor_id: mentor_id,
          accepted: false,
        }
      })
    })
    // .then()
  }
}
