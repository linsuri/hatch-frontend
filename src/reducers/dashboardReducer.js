const initialState = {
  profileMenu: null,
  notificationsMenu: null,
  dashboardTab: 0,
  conversations: [],
  activeConversation: null,
  allNotifications: [],
  // details: {},
}

export default function dashboardReducer(state = initialState, action) {
  // console.log('dashboardReducer', state, action);

  switch(action.type) {
    case 'OPEN_PROFILE_MENU':
      return { ...state, profileMenu: action.payload }
    case 'CLOSE_PROFILE_MENU':
      return { ...state, profileMenu: action.payload }
    case 'OPEN_NOTIFICATIONS_MENU':
      return { ...state, notificationsMenu: action.payload }
    case 'CLOSE_NOTIFICATIONS_MENU':
      return { ...state, notificationsMenu: action.payload }
    case 'SET_ALL_NOTIFICATIONS':
      return { ...state, allNotifications: action.payload }

    case 'DASHBOARD_CLICK_TAB':
      return { ...state, dashboardTab: action.payload }
    case 'DASHBOARD_CHANGE_TAB':
      return { ...state, dashboardTab: action.payload }
    // case 'SHOW_DETAILS':
    //   return { ...state, details: action.payload }
    case 'SET_ACTIVE_CONVERSATION':
      return { ...state, activeConversation: action.payload }
    default:
      return state;
  }
}
