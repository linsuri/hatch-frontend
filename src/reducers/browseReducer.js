const initialState = {
  allMentors: null,
}

export default function browseReducer(state = initialState, action) {

  switch(action.type) {
    case 'SET_ALL_MENTORS':
    return { ...state, allMentors: action.payload }
    default:
      return state;
  }
}
