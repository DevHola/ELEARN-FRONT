import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'
import errorReducer from './errorReducer'
import CourseReducer from './CourseReducer'


export default combineReducers({
    Authentication:AuthReducer,
    error:errorReducer,
    course:CourseReducer
});