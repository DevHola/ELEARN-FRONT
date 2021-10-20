/* eslint-disable import/no-anonymous-default-export */
import Cookies from 'js-cookie'
import cookie from 'js-cookie'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';
  export const setCookie = (key,value)=>{
    if(window !=='undefined'){
        cookie.set(key,value,{
            //Expires in 7days
            expires:7
        })
    }
}
//set in local storage
export const setLocalStorage = (key,value)=>{
    if(window !=='undefined'){
      localStorage.setItem(key,JSON.stringify(value))
    }
}

export const removeLocalStorage = key=>{
  if(window !=='undefined'){
    localStorage.removeItem(key)
  }
}

export const removeCookie = key =>{
  if(window !=='undefined'){
      cookie.remove(key,{
          expires:7
      })
  }
}
  
 
  const initialState = {
    token: Cookies.get('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
      case LOGIN_SUCCESS:
        setCookie('token',action.payload.token)
        setLocalStorage('user',action.payload.user)
        return { 
          ...state, 
          ...action.payload,
          isAuthenticated: true, 
          isLoading: false
         };
      case REGISTER_SUCCESS:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
        removeCookie('token')
        removeLocalStorage('user')
      return { ...state, 
        isAuthenticated: false,
         user:null 
        };
      case REGISTER_FAIL:
        removeCookie('token')
        removeLocalStorage('user')
        return {
          ...state,
          token:null,
          user:null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }
  