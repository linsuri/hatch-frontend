const initialState = {
  loggedIn: true,
  profileMenu: null,
  // currentPage: 'dashboard',
  dashboardTab: 0,
  user: { id: 1,
    first_name: 'Amy',
    last_name: 'Santiago',
  },
  mentors: [
    { id: 2,
      first_name: 'Raymond',
      last_name: 'Holt',
    },
  ],
  mentees: [
    { id: 3,
      first_name: 'Jake',
      last_name: 'Peralta'
    },
  ],
}

export default function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'GET_MENTORS':
      return { ...state, mentors: action.payload }
    case 'GET_MENTEES':
      return { ...state, mentees: action.payload }
    case 'OPEN_PROFILE_MENU':
      return { ...state, profileMenu: action.payload }
    case 'CLOSE_PROFILE_MENU':
      return { ...state, profileMenu: action.payload }
    case 'DASHBOARD_CLICK_TAB':
      return { ...state, dashboardTab: action.payload }
    case 'DASHBOARD_CHANGE_TAB':
      return { ...state, dashboardTab: action.payload }
    default:
      return state;
  }
}
