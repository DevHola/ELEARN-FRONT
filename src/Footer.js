import React from 'react'
import './footer.css'
import logo from './assets/logo.PNG'
function Footer() {
    return (
       
    <div className="container-fluid" className="foot">
    <div className="row p-5">
        <div className="col-4">
            <div className="col">
                <img src={logo} className="flogo ml-5"></img>
              </div>
            
        </div>
        <div className="col">
          <span className="flink">Links</span>
          <div className="col mt-1 typo"><a  href="">Blog</a></div>
          <div className="col typo"><a  href="">About</a></div>
          <div className="col typo"><a  href="">Connect</a></div>
          <div className="col typo"><a  href="">Teach with DigiLearn</a></div>
          <div className="col typo"><a  href="">Support</a></div>
          <div className="col typo"><a  href="">Terms</a></div>
          <div className="col typo"><a  href="">Privacy</a></div>
        </div>
        <div className="col">
          <span className="fcomm">Community</span>
          <div className="col mt-1 typo"><a  href="">Partner</a></div>
          <div className="col typo"><a  href="">Developers</a></div>
          <div className="col typo"><a  href="">Data Centers</a></div>
          <div className="col typo"><a  href="">Report a bug</a></div>
          <div className="col typo"><a  href="">Beta-Testers</a></div>
        </div>
        <div className="col">
          <i className="fa fa-twitter" aria-hidden="true"></i>  <span className="ftweet">tweets</span>
      </div>
    </div>
    <hr className="high"></hr>
    <div className="container-fluid mb-2">
        <span className="justin">© 2021 DigiLearn. All rights reserved.</span>
    </div>
</div> 

    )
}

export default Footer
