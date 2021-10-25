import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'
import '../screens/Sidebar.css';
import Photo  from '../assets/photo-1579546928686-286c9fbde1ec.png'
import Crop from '../assets/11zon_cropped.png'
import Icon from '../assets/Icon ionic-ios-arrow-dropright-circle.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Sidebar() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const token =Cookies.get('token')
        axios.get("https://elearn-ai.herokuapp.com/Api/user",{ headers: {"x-auth-token" : `${token}`} })
          .then((response) => {
            setData(response.data);
           // console.log(response.data)
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
      if (loading) return <Skeleton/>;
      if (error) return "Error!";
    return (
        <div className="sidebar">
        <div className="contain">
            <div className="box bx"></div>
            <div className="box stack-top tp">
                <div><img src={Photo} className="back" alt="i_photo"></img></div>
               <div><img src={Crop} className="crop" alt="i-main"></img></div>
            <div  className="correct mt-1">
                <h3 className="name"><b>{data.user.name || <Skeleton/>}</b> </h3>
                <h6 className="email"><b>{data.user.email || <Skeleton/> }</b></h6>
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
                <p className="Achievement_item">Achievements</p>
                <div><img src={Icon} alt="i_drop"></img></div>
                
            </div>
        </div>
        
     </div>
    )
}

export default Sidebar
