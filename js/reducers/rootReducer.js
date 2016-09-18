import { combineReducers } from 'redux'
import availabelCoursesReducer from './availabelCourses/availabelCoursesReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux' 

const rootReducer = combineReducers({
  availabelCourses: availabelCoursesReducer,
  routing: routerReducer
  //user: userReducer
})

export default rootReducer
