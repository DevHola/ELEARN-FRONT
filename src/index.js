import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './screens/Register';
import Login from './screens/Login';
import Activate from './screens/Activate';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
   <BrowserRouter>
   <Switch>
     <Route path="/" exact render={props=><App {...props}/>}/>
     <Route path="/register" exact render={props=><Register {...props}/>}/>
     <Route path="/login" exact render={props=><Login {...props}/>}/>
     <Route path="/user/activate/:token" exact render={props=><Activate {...props}/>}/>
     <Route path="/user/forgetPassword" exact render={props=><ForgetPassword {...props}/>}/>
     <Route path="/user/ResetPassword/:token" exact render={props=><ResetPassword {...props}/>}/>
   </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
