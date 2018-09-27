import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import dashboardReducer from './dashboardReducer'
import browserReducer from './browserReducer'

const rootReducer = combineReducers({ usersReducer: usersReducer, dashboardReducer: dashboardReducer, browserReducer: browserReducer })

export default rootReducer
