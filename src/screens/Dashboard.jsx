import React from 'react'
import axios from 'axios';
import '../screens/Dashboard.css';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Enroll from './Enroll';

function Dashboard() {
    return (
        <div>
            <Navigation/>
            <div class="mainer">
                <Sidebar></Sidebar>
                <Enroll></Enroll>
                </div>

        </div>
    )
}

export default Dashboard
