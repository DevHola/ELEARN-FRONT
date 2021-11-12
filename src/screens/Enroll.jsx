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
import EnrollLoader from './EnrollLoader';
export default function Enroll() {
	const  Courses   = useSelector((state)=>state.course.user_enrolled_courses) ;
    console.log(Courses)
	const dispatch = useDispatch()
	useEffect(()=>{
		setTimeout(() => {
			dispatch(userloadcourses())
			}, 500)
	  },[dispatch])

	
	  if (Courses === null) return <div className="horizon"><Skeleton/></div>;
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

	{Courses != null  ?  <Indiv Courses={Courses}  /> : <EnrollLoader/>}
	 </div>
    )
}


