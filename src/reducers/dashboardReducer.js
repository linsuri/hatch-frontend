const initialState = {
  dashboardTab: 0,
}

export default function dashboardReducer(state = initialState, action) {
  switch(action.type) {
    case 'DASHBOARD_CLICK_TAB':
      return { ...state, dashboardTab: action.payload }
    case 'DASHBOARD_CHANGE_TAB':
      return { ...state, dashboardTab: action.payload }
    default:
      return state
  }
}
