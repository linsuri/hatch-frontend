// import usersReducer from './usersReducer'

const initialState = {
  profileMenu: null,
  // currentPage: 'dashboard',
  dashboardTab: 0,
  // user: { id: 1,
  //   first_name: 'Amy',
  //   last_name: 'Santiago',
  // },
  mentors: [
    { id: 2,
      first_name: 'Raymond',
      last_name: 'Holt',
    },
    { id: 4,
      first_name: 'Terry',
      last_name: 'Jeffords'
    },
    { id: 6,
      first_name: 'Rosa',
      last_name: 'Diaz'
    },
    { id: 8,
      first_name: 'Dummy',
      last_name: 'Dummy'
    },
  ],
  mentees: [
    { id: 3,
      first_name: 'Jake',
      last_name: 'Peralta'
    },
    { id: 5,
      first_name: 'Charles',
      last_name: 'Boyle'
    },
    { id: 7,
      first_name: 'Gina',
      last_name: 'Linetti'
    },
    { id: 10,
      first_name: 'Dummy',
      last_name: 'Dummy'
    },
  ],
}

export default function reducer(state = initialState, action) {
  // console.log('reducer', state, action);

  switch(action.type) {
    // case 'SIGN_UP':
    //   return { ... state }
    // case 'SET_CURRENT_USER':
    //   return { ...state, user: action.payload, loggedIn: true }
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
