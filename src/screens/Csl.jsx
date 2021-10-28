import React,{useEffect} from 'react';
import '../screens/Navigation.css'
import Skeleton from 'react-loading-skeleton'
import { useSelector,useDispatch } from 'react-redux'
import { loadUser} from '../redux/actions/authActions'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Csl() {
   
    const user = useSelector((state)=>  state.Authentication.user)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(loadUser())
	},[dispatch])
    return (
        <div className="d-flex flex-row">
        <div className="col-4">
        <img src="https://img.icons8.com/clouds/100/000000/user.png" alt="" class="img-fluid ikon"/>
        </div>
        <div className="col-8">
        <li className="nav-item dropdown">
         <a href="#" className="nav-link dropdown-toggle twi text-nowrap" data-bs-toggle="dropdown">
            {user.user.name} </a>
            <div className="dropdown-menu bg-white">
                <a href="#" className="dropdown-item">Inbox</a>
                <a href="#" className="dropdown-item">Drafts</a>
                <a href="#" className="dropdown-item">Sent Items</a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">Trash</a>
            </div>
        </li>
        </div>
        
      </div>   
    )
}
