import React from 'react'
import '../screens/Enroll.css'
import Skeleton from 'react-loading-skeleton'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-loading-skeleton/dist/skeleton.css'

export default function EnrollLoader() {
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
		<Skeleton/>
        </Carousel></div>
    )
}
