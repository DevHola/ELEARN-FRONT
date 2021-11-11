import React from 'react'

export default function Indiv({Courses}) {
    return (
        <div>
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
      </div>  
    )
}
