import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../screens/ResetPassword.css'
import logo from '../assets/logo.PNG'


const ResetPassword = ({match}) => {
    const [formData,setformData]= useState({
    password1:"",
    password2:"",
    token:"",
    textChange: 'Send'
    })
    const { password1, password2, textChange, token } = formData;
    
    useEffect(() => {
        let token = match.params.token
        if(token) {
            setformData({...formData, token,})
        }
        
    }, [])
    const handleChange = text => e => {
        setformData({ ...formData, [text]: e.target.value });
      };
    const handleSubmit = e => {
        console.log(password1, password2)
      e.preventDefault();
      if ((password1 === password2) && password1 && password2) {
        setformData({ ...formData, textChange: 'Sending' });
        axios
          .post('http://localhost:7000/Api/user/resetPassword', {
              newpassword: password1,
              reset: token
          })
          .then(res => {
              setformData({
                ...formData,
                 password1: '',
                password2: ''
              });
              toast.success(res.data.message);
            
          })
          .catch(err => {
            toast.error('Something is wrong try again');
          });
      } else {
        toast.error('Passwords don\'t matches');
      }
    };
    return (
        <div className="Register Container">
        <ToastContainer/>
        <div className="container">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div>
        <p className="catch">Sign up to Explore course just for you.</p>    
        </div>
        
        <div className="signup">
           
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                <div><input className="in" type="password" placeholder="Password" onChange={handleChange('password1')} value={password1} /></div>
                <div><input className="in" type="password" placeholder="Confirm Password" onChange={handleChange('password2')} value={password2} /></div>
                
                <div><button className="sb" type="submit" >Send</button></div>
                </div>
            </form>
        </div>
        
    </div>
      </div>
    )
}

export default ResetPassword
