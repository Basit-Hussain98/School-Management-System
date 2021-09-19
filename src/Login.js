import React, { Component } from 'react'
import "./Nav.css";
import header from "./uni project.jpg"
import './Login.css'
import './Addclass.css'
import { Link } from 'react-router-dom';


export default class AdminNav extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark nav">
  <a className="navbar-brand" href="#">HeidleBerg School System</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto  ">
      <li className="nav-item active pr-5 ">
        <Link className="nav-link" to="/login">Admin Login <span class="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item ">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
     
    </ul>
  </div>
</nav>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12 mt-3">
            <img src={header} width="100%" height="100%"/>
        </div>
        <div className="adminlogin">
            <h6 className="text-center">Admin Login</h6>
            <form className="form-group mt-5 pt-5 w-75 ml-5 pl-5">
              <label>Username</label>
              <input type="text" className="form-control my-3"/>
              
              <label>Password</label>
              <input type="password" className="form-control"/>
              <button className=" button   text-white  mt-4">Login</button> 

            </form>
            
        </div>
    </div>
</div>

</React.Fragment>

        )
    }
}
