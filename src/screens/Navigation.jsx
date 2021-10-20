import React from 'react';
import axios from 'axios';
import '../screens/Navigation.css'
import logo from '../assets/logo.PNG'
function Navigation() {
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
	<div className="col-5"><div className="row mt-2 ml-1">
		<div className="col nav ml-4"><a href="#">Teach with DigiLearn.</a></div>
		<div  className="mb-1 liner"></div>
		<div className="col-6 mr-5">
			<div className="row">
				<div className="col" >
					<a href="" className="btn classics">Log in</a>
				  </div>
				<div className="col" >
					<button className="btn classic">Sign Up</button>
				</div>
				
			  </div>
			</div>
	</div></div>
  </div>
  </div>
    )
}
export default Navigation
