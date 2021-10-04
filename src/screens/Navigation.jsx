import React from 'react';
import axios from 'axios';
import '../screens/Navigation.css'
import logo from '../assets/logo.PNG'
function Navigation() {
    return (
        <div className="Header">
	 <div className="logo">
	 <img src={logo} alt="" className="brand_logo"></img>
	 </div>
	 <div className="search_bar">
		<i className="bi bi-search ion"></i>
	 <input type="text" className="searchbar"  name="search" placeholder="Look for anything."></input>
	 </div>

	 <div className="Navigation_bar">
	 <ul>
	 <li><a href=""><i className="bi bi-bell dell" ></i></a></li>
	 <li><a href=""><i className="bi bi-envelope-open-fill"></i></a></li>
	 <li><a href="">UPDBoard</a></li>
	 </ul>
	 </div>
	 </div>
    )
}
export default Navigation
