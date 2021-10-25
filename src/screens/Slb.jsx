import React from 'react'
import { useHistory } from "react-router-dom"
import '../screens/Navigation.css'
export default function Slb() {
	const history = useHistory();
	function handleClick(path) {
		history.push(path);
	  }
    return (
         <div className="row">
				<div className="col" >
					<a href="" className="btn classics" onClick={() => handleClick("login")}>Log in</a>
				  </div>
				<div className="col" >
					<button className="btn classic" onClick={() => handleClick("register")}>Sign Up</button>
				</div>
				
			  </div>   
    
    )
}

                                