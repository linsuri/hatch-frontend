import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import reducer from './reducer'

const rootReducer = combineReducers({ usersReducer: usersReducer, reducer: reducer })

export default rootReducer
