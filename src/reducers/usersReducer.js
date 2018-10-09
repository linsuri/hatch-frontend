const defaultState = {
  user: null,
  loggedIn: false,
  failedLogin: false,
  error: null
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
    case 'FAILED_LOGIN':
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
        loggedIn: false,
        failedLogin: false,
        error: null
      }
    default:
      return state
  }
}

export default usersReducer
