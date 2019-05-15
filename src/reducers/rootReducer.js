import { combineReducers } from "redux";
import postReducer from '../reducers/postReducer'
const rootReducer=combineReducers({
  subjectReducer :postReducer
})
export default  rootReducer;