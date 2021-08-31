import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
function Header(){
    return(
        <div className="Header">
            <div className="header__left">
            <img src="https://education.gov.ng/wp-content/uploads/2020/09/logo-edu_9b237272406aac1eeed3a1fe61035e14.png" draggable="false" alt=""></img>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder="Search..." ></input>
            </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={CastForEducationIcon} title="Browse Courses"/>
                <HeaderOption Icon={SupervisorAccountIcon}  title="Performance"/>
                <HeaderOption Icon={ForumIcon} title="Forum"/>
                <HeaderOption Icon={NotificationsNoneIcon} title="Notification" />
</div>
        </div>    )
}
export default Header