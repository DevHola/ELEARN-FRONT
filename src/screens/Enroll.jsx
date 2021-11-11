import React,{useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../screens/Enroll.css'
//pust useSelector below
import { useDispatch,useSelector } from 'react-redux'
import { userloadcourses } from '../redux/actions/courseAction'
export default function Enroll() {
	const Courses = useSelector((state)=>state.course.user_enrolled_courses);
    console.log(Courses)
	const dispatch = useDispatch()
	useEffect(()=>{
	
		  dispatch(userloadcourses())
	  },[dispatch])

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
		<div className="Itemholder justify-content-between"><Carousel className="no ml-1" responsive={responsive}>
		{Courses.map((c) => (
			<div className="lex" Key:{c._id} >
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
	 </div>
    )
}


