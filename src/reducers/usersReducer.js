const defaultState = {
  user: null,
  loggedIn: false,
  failedLogin: false,
  error: null,
  notifications: null,
  newNotifications: 0,
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false,
        notifications: action.payload.received_notifications,
        newNotifications: action.payload.received_notifications.filter(notification => !notification.opened).length,
      }
    case 'FAILED_LOGIN':
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
      }
    case 'CLOSE_ALERT_ERROR':
      return {
        ...state,
        error: null,
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
        loggedIn: false,
        failedLogin: false,
        error: null,
      }
    case 'RECEIVED_NOTIFICATIONS':
      if (action.payload.recipient.id === state.user.id) {
        return {
          ...state,
          newNotifications: state.newNotifications + 1,
          notifications: [...state.notifications, action.payload],
        }
      } else {
        return {
          ...state,
          notifications: [...state.notifications],
        }
      }
    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        newNotifications: 0,
      }
    default:
      return state
  }
}

export default usersReducer
