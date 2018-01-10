import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userSessionReducer from './Services/Auth/UserSessionReducer'

const allReducers = combineReducers({
  router: routerReducer,
  userSessionReducer: userSessionReducer
})

export default allReducers
