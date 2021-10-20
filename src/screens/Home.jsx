import React, { Component } from 'react'
import './Home.css';
import Footer from '../Footer';
import Navigation from './Navigation';
export default class Home extends Component {

	render() {
		return (
			
    <div className="container-fluid m-0 p-0">
    <div className="container-fluid">
  <Navigation/>
  <div className="spacer">
    &nbsp;
</div>
</div>

      <div class="w-100"><img className="slider" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" height="40px" ></img></div>

      <div className="container-fluid pb-5 ">
		 <div className="w-100 pile">
			 <h1 className="pt-5 lead">Explore And Widen Your Horizon</h1>
			 <div className="d-flex mt-4 w-100">
				 <div className=" border p-4 m-1 hallow w-25 cat" >Development</div>
				 <div className=" border p-4 m-1 hallow w-25 cat" >Business & Finance</div>
				 <div className=" border p-4 m-1 hallow w-25 cat" >Design</div>
				 <div className=" border p-4 m-1 hallow w-25 cat" >Marketing</div>
			 </div>
			 <div className="d-flex mt-2 ">
				<div className=" border p-4 m-1 hallow w-25 cat" >Data Science</div>
				<div className=" border p-4 m-1 hallow w-25 cat" >Computer science</div>
				<div className=" border p-4 m-1 hallow w-25 cat" >Liberal Arts</div>
				<div className=" border p-4 m-1 hallow w-25 cat" >Personal development</div>
			</div>
			</div>
		</div>
    <div className="container-fluid spoke ">
	  <Footer/>
		</div>
    
    </div>

		)
	}
}
