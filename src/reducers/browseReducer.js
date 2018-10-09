const initialState = {
  allMentors: null,
  allRelationships: null,
}

export default function browseReducer(state = initialState, action) {

  switch(action.type) {
    case 'SET_ALL_MENTORS':
      return { ...state, allMentors: action.payload }
    case 'SET_ALL_RELATIONSHIPS':
      return { ...state, allRelationships: action.payload }
    default:
      return state
  }
}
