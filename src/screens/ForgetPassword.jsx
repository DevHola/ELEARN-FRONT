import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../screens/ForgetPassword.css'
import logo from '../assets/logo.PNG'


const ForgetPassword = () => {
    const [formdata,setFormData] = useState({
        email:"",
        textChange: 'Send'
      })
      const {email, textChange} = formdata
      const handleChange = text => e =>{
           setFormData({...formdata,[text]:e.target.value})
      }
      const handleSubmit = e =>{
        e.preventDefault()
        if(email){
            setFormData({ ...formdata, textChange: 'Sending' });
                  axios.post('http://localhost:7000/Api/user/forget',{
                    email
                  }).then(res=>{
                    setFormData({...formdata,
                    email:''
                  })
                    toast.success("Please check your email")
                  }).catch(err=>{
                    toast.error(err.response.data.message)
                  })
            
        }else{
          toast.error("Please fill all fields")
        }
      }
    return (
        <div className="Register Container">
        <ToastContainer/>
        <div className="container">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div>
        <p className="catch">Forget your password!.Let's Reset</p>    
        </div>
        
        <div className="signup">
           
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                <div><input className="in" type="text" placeholder="Email" onChange={handleChange('email')} value={email} /></div>
                <div><button className="sb" type="submit" >Send</button></div>
                </div>
            </form>
        </div>
        
    </div>
      </div>
    )
}

export default ForgetPassword
