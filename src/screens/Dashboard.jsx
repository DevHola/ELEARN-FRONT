import React ,{ Component }from 'react'
import axios from 'axios';
import '../screens/Dashboard.css';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Enroll from './Enroll';
import store from '../redux/Store'
import { loadUser} from '../redux/actions/authActions'

export default class Dashboard extends Component {
    	componentDidMount(){
		store.dispatch(loadUser());
	}
    render(){
        return (
            <div className="container-fluid">
                <Navigation/>
                <div className="mainer mt-5">
                    <Sidebar></Sidebar>
                    <Enroll></Enroll>
                    </div>
    
            </div>
        )
    }
   
}


