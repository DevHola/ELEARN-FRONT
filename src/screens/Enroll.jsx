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
		<div className="Itemholder justify-content-between"><Carousel className="no" responsive={responsive}>
		<div className="card item tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card  tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card  tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card  tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card  tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card tyer">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Card cap"></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
		</Carousel></div>
	 </div>
    )
}


export default Enroll
