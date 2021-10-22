import React,{useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../screens/Navigation.css'
import logo from '../assets/logo.PNG'
import { useSelector,useDispatch } from 'react-redux'
import { loadUser} from '../redux/actions/authActions'
import Slb from './Slb';
import Csl from './Csl';
export default function Navigation({prop}) {
	const Auth = useSelector((state) => state.Authentication.isAuthenticated)
    const user = useSelector((state)=>  state.Authentication.user)
	const isLoading = useSelector((state)=> state.Authentication.isLoading)
	const dispatch = useDispatch()
	const token = Cookies.get('token');
	
	useEffect(()=>{
	  if(token){
		dispatch(loadUser())
	  }
	},[dispatch])
	
    return (
        <div className="navbar w-100 navbar-inverse navbar-fixed-top">
	<div className="container-fluid Header tile">
			<div className="col-7 ">
		<div className="row dope">
			<div className="col logos">
				<img src={logo}></img>
			</div>
			<div className="col">
				<div className="dropdown">
					<button className="btn mt-3 ml-1 dropbtn">Explore Now</button>
					<div className="ml-1 fade dropdown-content">
						<div className="row pt-3 pl-1">
							<div className="col">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
							</div>
							<div className="mb-2 linker"></div>
							<div className="col">
								<a href="#">Link 1</a>
								<a href="#">Link 2</a>
								<a href="#">Link 3</a>
								</div>
							
						</div>
					</div>
				  </div>
			</div>
			<div className="col-7 mt-3">
				<div className="form-group  has-search">
					<span className="fa fa-search form-control-feedback"></span>
					<input type="text" name="search" className="form-control searcher" placeholder="Search"></input>
				  </div>
			</div>
		  </div>
	</div>
	<div className="col-5"><div className="row mt-3 ml-1">
		<div className="col nav ml-4 mt-2"><a href="#">Teach with DigiLearn.</a></div>
		<div  className="mb-1 liner "></div>
		
		<div className="col-6 mr-5">
		{Auth ? <Csl user={user} isLoading={isLoading}></Csl>: <Slb></Slb>}
			</div>
	</div></div>
  </div>
  </div>
    )
}
// setting default value to name prop
Navigation.defaultProps = {
    user: {
		user:{
			name:"User"
		}
	}
}

