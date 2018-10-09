export const signUp = (email_address, password, first_name, last_name) => {
  return (dispatch) => {
    fetch("http://192.168.2.29:3000/api/v1/users", {
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
      // console.log(json)
      localStorage.setItem('jwt', json.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: json.user })
    })
    .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const logIn = (email_address, password) => {
  return (dispatch) => {
    fetch("http://192.168.2.29:3000/api/v1/login", {
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
  return (dispatch) => {
    fetch("http://192.168.2.29:3000/api/v1/profile", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then((json) => dispatch(setCurrentUser(json.user)))
  }
}

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData,
})

export const failedLogin = errorMsg => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const logOut = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch({ type: 'LOG_OUT' })
  }
}

// export const patchUserProfile = (stateUserData) => {
//   return (dispatch) => {
//     fetch("http://192.168.2.29:3000/api/v1/users",{
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           id: stateUserData.id,
//           first_name: stateUserData.first_name,
//           last_name: stateUserData.last_name,
//           email_address: stateUserData.email_address,
//           // password: '',
//           job_title: stateUserData.job_title,
//           // location: ,
//           expertiseArray: stateUserData.expertiseArray.join(","),
//           bio: stateUserData.bio,
//           linkedin: stateUserData.linkedin,
//           github: stateUserData.github,
//           personal_website: stateUserData.personal_website,
//           mentor_status: stateUserData.mentor_status,
//           will_buy_coffee: stateUserData.will_buy_coffee,
//         }
//       })
//     })
//   }
// }

export const receivedNotifications = response => ({
  type: 'RECEIVED_NOTIFICATIONS',
  payload: response.notification,
})

export const clearNotifications = (user_id) => {
  return (dispatch) => {
    fetch('http://192.168.2.29:3000/api/v1/notifications', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        notification: {
          recipient_id: user_id,
          opened: true,
        }
      })
    })
  .then(res => res.json())
  .then(json => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' })
  })
  }
}
