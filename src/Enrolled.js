import React from 'react'

import './enrolled.css'
import Current from './Current';
import Recommended from './Recommended';
function Enrolled() {
    return (
        <div className="enrolled">
            <div className="search__enroll">
           <span>Dashboard</span>
            </div>
            <div className="Current">
                <Current/>
                </div>
                {/*
                <div className="search__enroll">
                <span>Recommended Courses</span>
                </div>
                <div className="Current">
                <Recommended/>
                </div>*/
}
                
        
           
        </div>
    )
}

export default Enrolled
