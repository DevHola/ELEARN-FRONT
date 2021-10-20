import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Cookies from 'js-cookie'
import Register from './screens/Register';
import React ,{ useEffect } from 'react'
import Home from './screens/Home';
import Login from './screens/Login';
import Activate from './screens/Activate';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import Dashboard from './screens/Dashboard';
import AuthRoute from './screens/AuthRoute';
import { useSelector,useDispatch } from 'react-redux'
import { loadUser} from './redux/actions/authActions'
export default function App({props}) {
  const counter = useSelector((state) => state)
  console.log(counter)
  const dispatch = useDispatch()
  const token = Cookies.get('token');
  useEffect(()=>{
       dispatch(loadUser())
  },[dispatch])
  
		return (
           <div className="">
			   <Router>
			   <main>
			   <Switch>
     <Route path="/" exact render={props=><Home {...props}/>}/>
     <AuthRoute path="/register" type="guest"  exact render={props=><Register {...props}/>}/>
     
     <AuthRoute path="/login" type="guest" exact render={props=><Login {...props}/>}/>
     <AuthRoute path="/user/activate/:token" type="guest" exact render={props=><Activate {...props}/>}/>
     <AuthRoute path="/user/forgetPassword" exact type="guest" render={props=><ForgetPassword {...props}/>}/>
     <AuthRoute path="/user/ResetPassword/:token" type="guest" exact render={props=><ResetPassword {...props}/>}/>
     <Route path="/user/:id" exact  render={props=><Dashboard {...props}/>}/>
   </Switch>
			   </main>
			   </Router>
		   </div>			
 
		)
	}

