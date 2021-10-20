import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';
import '../screens/Login.css'
import {connect} from 'react-redux'
import { authenticate, isAuth } from '../helper/auth';
import { useHistory } from "react-router-dom";
import { login } from '../redux/actions/authActions'
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.PNG'
export default connect(null, { login })(props => {
  
    const [formdata,setFormData] = useState({
        email:"",
        password:"",
      })
      const history = useHistory();
      const {email,password} = formdata
      const handleChange = text => e =>{
           setFormData({...formdata,[text]:e.target.value})
      }
      const handleSubmit = e =>{
        e.preventDefault()
        if(email && password){
          props.login({ email, password });
          setFormData({...formdata,
            email:'',
            password:''
          });
            toast.success("Sign in success")
            const user = JSON.parse(localStorage.getItem('user'));
            if(user){
              console.log(user.name)
              setTimeout(() => {
              history.push(`/${user.name}`)
              }, 5000)

            }else{
              setTimeout(() => {
                history.push('/')
                }, 5000)
            }
            
        }else{
          toast.error("Please fill all fields")
        }
      }
    return (
        <div className="Register Container">
           {isAuth()? <Redirect to='/'/> :null}
        <ToastContainer/>
        <div className="container">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div>
        <p className="catch"> Explore courses and widen your horizon.</p>    
        </div>
        
        <div className="login">
           
            <form onSubmit={handleSubmit}  >
                <div className="form-group">
                <div><input className="in" type="text" placeholder="Email" onChange={handleChange('email')} value={email} /></div>
                <div><input className="in" type="password" placeholder="Password" onChange={handleChange('password')} value={password} /></div>
                <div className="check"> 
                <input className="form-check-input checker" type="checkbox" value="" id="defaultCheck1" />
                <label className="">
                   <p className="term"> I have read and accepted the Terms and Conditions</p> 
                </label></div>

                <div><button className="sb" type="submit" >Sign in</button></div>
                </div>
            </form>
        </div>
        
    </div>
      </div>
    )
})
