import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helper/auth';
import { Link, Redirect } from 'react-router-dom';
import '../screens/Register.css'
import logo from '../assets/logo.PNG'

const Register=()=> {
  const [formdata,setFormData] = useState({
    name:"",
    email:"",
    password1:"",
    password2:""
  })
  const {name,email,password1,password2} = formdata
  const handleChange = text => e =>{
       setFormData({...formdata,[text]:e.target.value})
  }
  const handleSubmit = e =>{
    e.preventDefault()
    if(name && email && password1){
         if(password1 === password2){
              axios.post('https://elearn-ai.herokuapp.com/Api/Register',{
                name,email,password:password1
              }).then(res=>{
                setFormData({...formdata,
                name:'',
                email:'',
                password1:'',
                password2:''
              })
                toast.success(res.data.message)
              }).catch(err=>{
                toast.error(err.response.data.error)
              })
         }else{
          toast.error("Password do not match")
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
        <p className="catch">Sign up to Explore course just for you.</p>    
        </div>
        
        <div className="signup">
           
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                <div><input className="in" type="text" placeholder="Name" onChange={handleChange('name')} value={name}/></div>
                <div><input className="in" type="text" placeholder="Email" onChange={handleChange('email')} value={email} /></div>
                <div><input className="in" type="password" placeholder="Password" onChange={handleChange('password1')} value={password1} /></div>
                <div><input className="in" type="password" placeholder="Confirm Password" onChange={handleChange('password2')} value={password2} /></div>
                <div className="check"> 
                <input className="form-check-input checker" type="checkbox" value="" id="defaultCheck1" />
                <label className="">
                   <p className="term"> I have read and accepted the Terms and Conditions</p> 
                </label></div>

                <div><button className="sb" type="submit" >Sign up</button></div>
                </div>
            </form>
        </div>
        
    </div>
      </div>
    );
  }
  
  export default Register;
  