import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://image.freepik.com/free-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg" alt=""></img>
                <Avatar className="sidebar__avatar"/>
                <h2>Fawaz Ibrahim</h2>
                <h4>Connectola@yahoo.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Enrolled Courses</p>
                    <p className="sidebar__statNumber">7</p>
                </div>
                <div className="sidebar__stat">
                    <p>Completed Courses</p>
                    <p className="sidebar__statNumber">3</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Achievement Badges</p>

            </div>
        </div>
    )
}
export default Sidebar