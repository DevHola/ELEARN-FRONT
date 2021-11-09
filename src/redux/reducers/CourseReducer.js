/* eslint-disable import/no-anonymous-default-export */
import {
   FETCH_COURSES,
   FETCH_COURSE,
   LOADING_FETCH_COURSE,
   LOADING_FETCH_COURSES,
   USER_FETCH_COURSE,
   USER_LOADING_FETCH_COURSE
  } from '../actions/types';

  const initialState = {
    isLoading: false,
    courses : null  ,
    user_enrolled_courses:null,
    course  : null 
  };

export default function(state = initialState, action){

    switch (action.type){
        case LOADING_FETCH_COURSES:
            return { ...state, 
                isLoading: true};
        case LOADING_FETCH_COURSE:
            return { ...state, 
                isLoading: true};
        case USER_LOADING_FETCH_COURSE:
            return { ...state, 
                isLoading: true};
        case FETCH_COURSES:
            return {
                ...state,
                isLoading: false,
                courses: action.payload.courses
            };
        case USER_FETCH_COURSE:
            return {
                ...state,
                isLoading: false,
                user_enrolled_courses: action.payload.courses
            };
        case FETCH_COURSE:
            return {
              ...state,
              isLoading: false,
              course: action.payload
            };
            default:
            return state;
    }
}