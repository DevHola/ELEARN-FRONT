import React from 'react';
import axios  from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../screens/Enroll.css'
function Enroll() {
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
        <div className="Courses">
		<header className="course_header">
			<div className="moon" ><h1 className="mover">My Course</h1></div>
			<div className="diver">
				<p className="move">
					<span className="plus">&#139;</span>
					<span className="plus">&#155;</span>
				</p>
			</div>
		
		</header>
		<hr className="horizon"></hr>
		<div className="Itemholder"><Carousel responsive={responsive}>
		<div className="item">Course 1</div>
		<div>Course 2</div>
		<div>Course 3</div>
		<div>Course 4</div>
		<div>Course 5</div>
		<div>Course 6</div>
		<div>Course 7</div>
		</Carousel></div>
	 </div>
    )
}


export default Enroll
