import React,{useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../screens/Enroll.css'
//pust useSelector below
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch,useSelector } from 'react-redux'
import { userloadcourses } from '../redux/actions/courseAction'
import Indiv from './Indiv';
export default function Enroll() {
	const  Courses   = useSelector((state)=>state.course.user_enrolled_courses);
    console.log(Courses)
	const dispatch = useDispatch()
	useEffect(()=>{
		setTimeout(() => {
			dispatch(userloadcourses())
			}, 5000)
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
	  if (Courses === null) return <div className="horizon"><Skeleton /></div>;
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
		{Courses === "" ? <Indiv Courses={Courses}/>  :<Skeleton/>}     
	</Carousel></div>
	 </div>
    )
}


