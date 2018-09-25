export function signUp(email_address, password, first_name, last_name) {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email_address: email_address,
          password: password,
          first_name: first_name,
          last_name: last_name,
        }
      })
    })
    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
    .then(json => {
      console.log(json)
      localStorage.setItem('jwt', json.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: json.user })
    })
    .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export function logIn(email_address, password) {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email_address: email_address,
          password: password,
        }
      })
    })
    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
    .then(json => {
      localStorage.setItem('jwt', json.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: json.user })
    })
    .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/profile", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((json) => dispatch(setCurrentUser(json.user)))
  }
}

export function setCurrentUser(userData) {
  return {
    type: 'SET_CURRENT_USER',
    payload: userData,
  }
}

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const logOut = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({ type: 'LOG_OUT' })
  }
}
