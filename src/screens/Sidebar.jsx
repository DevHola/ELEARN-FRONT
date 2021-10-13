import React from 'react';
import axios from 'axios';
import '../screens/Sidebar.css';
import Photo  from '../assets/photo-1579546928686-286c9fbde1ec.png'
import Crop from '../assets/11zon_cropped.png'
import Icon from '../assets/Icon ionic-ios-arrow-dropright-circle.png'
function Sidebar() {
    return (
        <div className="sidebar">
        <div className="contain">
            <div className="box bx"></div>
            <div className="box stack-top tp">
                <div><img src={Photo} className="back" alt="i_photo"></img></div>
               <div><img src={Crop} className="crop" alt="i-main"></img></div>
            <div  className="correct mt-1">
                <h3 className="name"><b>Ibrahim Fawaz Olamide</b> </h3>
                <h6 className="email"><b>Connectola@yahoo.com</b></h6>
            </div>
            </div>
        </div>
        <div className="contain1">
            <div className="enroll">
                <p  className="roller">Enrolled</p>
                <p className="num">7</p>
            </div>
            <div className="enroll">
                <p className="roller">Completed</p>
                <p className="num">3</p>
            </div>
        </div>
        <div className="contain2">
            <div className="achieve">
                <p class="Achievement_item">Achievements</p>
                <div><img src={Icon} alt="i_drop"></img></div>
                
            </div>
        </div>
        
     </div>
    )
}

export default Sidebar
