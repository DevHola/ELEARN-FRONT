import React from 'react'
import '../screens/Navigation.css'
export default function Csl(props) {
    const user = props.user
    
    return (
        <div className="row">
       <div className="widget-content-left  ml-3 header-user-info">
                                    <div className="widget-heading">
                                        {user.user.name}
                                    </div>
                                </div>
        
      </div>   
    )
}
