import React,{useEffect} from 'react';
import axios from 'axios';
import '../screens/Dashboard.css';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Enroll from './Enroll';
import { useSelector,useDispatch } from 'react-redux'
import { loadUser} from '../redux/actions/authActions'

function Dashboard() { 
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(loadUser())
	  
	},[dispatch])
         return (
            <div className="container-fluid">
                <Navigation/>
                <div className="mainer mt-5">
                    <Sidebar></Sidebar>
                    <Enroll></Enroll>
                    </div>
    
            </div>
        )
    }
   
export default Dashboard

