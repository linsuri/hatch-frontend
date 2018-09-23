import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({ usersReducer: usersReducer, dashboardReducer: dashboardReducer })

export default rootReducer
