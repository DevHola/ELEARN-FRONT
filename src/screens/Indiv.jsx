import React from 'react'
import '../screens/Enroll.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Indiv({Courses}) {
    const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 5
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1
		}
	  };
    return (
        <div className="Itemholder justify-content-between"><Carousel className="no ml-1" responsive={responsive} >
		{Courses.map((c) => (
			<div className="lex" >
       	<div className="card tyer">
		   <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
		   <div className="card-body pro">
			 <p className="card-text"> {c.Title}.</p>
		   </div>
		 </div>
		 <div className="separate"></div>
		 </div>
      ))}          
	

		</Carousel></div>
    )
}
