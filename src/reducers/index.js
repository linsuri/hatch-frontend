import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import dashboardReducer from './dashboardReducer'
import browseReducer from './browseReducer'

const rootReducer = combineReducers({ usersReducer: usersReducer, dashboardReducer: dashboardReducer, browseReducer: browseReducer })

export default rootReducer
