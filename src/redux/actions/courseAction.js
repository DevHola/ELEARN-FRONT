import axios from "axios";
import Cookies from 'js-cookie'
import {
    FETCH_COURSES,
    FETCH_COURSE,
    LOADING_FETCH_COURSE,
    LOADING_FETCH_COURSES,
    USER_LOADING_FETCH_COURSE,
    USER_FETCH_COURSE,
    COURSES_ERROR,
    USER_COURSES_ERROR
} from './types'
import { returnErrors } from './errorActions';
//LOAD ALL COURSE IN SYSTEM
export const loadCourses = () =>{
    return (dispatch,getstate)=>{
        dispatch({ type: LOADING_FETCH_COURSES });
        const token = Cookies.get('token')
        return axios.get('https://elearn-ai.herokuapp.com/Api/courses',{ headers: {"x-auth-token" : `${token}`} } )
        .then(res =>
            dispatch({
              type: FETCH_COURSES,
              payload: res.data
            })
            
          )
          .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
              type: COURSES_ERROR
            });
          });
    }
}
//LOAD ALL COURSES USER ENROLLED IN
export const userloadcourses =()=>{
  return(dispatch,state)=>{
    dispatch({type:USER_LOADING_FETCH_COURSE})
    const token = Cookies.get('token')
    return axios.get('https://elearn-ai.herokuapp.com/Api/user/courses',{ headers: {"x-auth-token" : `${token}`} })
    .then(res =>
      dispatch({
        type: USER_FETCH_COURSE,
        payload: res.data
      })
      
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: USER_COURSES_ERROR
      });
    });
  }
}