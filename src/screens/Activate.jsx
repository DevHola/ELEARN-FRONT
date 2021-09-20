import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helper/auth';
import { Link, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import '../screens/Activate.css'
import logo from '../assets/logo.PNG'

const Activate=({match,history})=> {
    const [formData,setFormData] = useState({
        name:"",
        token:"",
        show:true   
     });
     useEffect(()=>{
         let token = match.params.token;
         let name = jwt.decode(token)
         if(token){
             setFormData({...formData,name,token});
         }
     },[match.params])
     const { name, token, show } = formData;
     const handleSubmit = e =>{
         e.preventDefault()
         axios.post('http://localhost:7000/Api/user/Activation',{
             token
         }).then(res=>{
            setFormData({...formData,show:false})
            toast.success(res.data.message)
            setTimeout(() => { 
                history.push('/login');
            }, 5000)
         }).catch(err=>{
             toast.error(err.response.data.error)
         });
     }
    return (
        <div>
            <div className="Register active">
        {isAuth()? <Redirect to='/'/> :null}
        <ToastContainer/>
        <div className="active">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div>
        <p className="catch"> Explore courses and widen your horizon.</p>    
        </div>
        
        <div className="login">
           
            <form onSubmit={handleSubmit}  >
                <div className="form-group">
                <div><button className="sb" type="submit" >Activate your account.</button></div>
                </div>
            </form>
        </div>
        
    </div>
      </div>         
        </div>
    )
}

export default Activate
