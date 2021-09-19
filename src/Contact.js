import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css";
import header from "./uni project.jpg"
import './Contact.css'
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
        </div>
        <div className="row">
            <div className="col-md-6">
        
        <div className="contact">
            <h6 className="contact-head ml-5 mt-4">
                CONTACT US
            </h6>
            <p className="contact-para ml-5 mt-5">Owner/CEO:Malik Basit Hussain</p><br></br>
            <h6 className="address">Address</h6>
            <p className="contact-para ml-5 pl-5">Flat No:13A ,Block No:5A, Street No:5<br/>
Sector I-8/1 , Islamabad.</p>
<h6 className="address ">Contact</h6>
            <div className="ml-5 pl-5"> <strong>Phone:</strong>
            03145150272<br/>
            <strong>FAX: </strong>(051)5682087<br/>
            <strong>Email: <a href="#">Bassithussain98@gmail.com</a></strong>
            </div>
        </div>
        </div>
        <div className="col-md-6 opening">
            <h6 className="contact-head ml-5 mt-4">Opening Hours</h6>
            <div className="ml-5 pl-3">
            <br/>Mon:8:00am-1:30pm
            <br/>Tue: 8:00am-1:30pm
            <br/>Wed: 8:00am-1:30pm
            <br/>Thu: 8:00am-1:30pm
            <br/>Fri:8:00am-11:30pm  
            <br/>Sat: OFF
            <br/>sun: OFF
            </div>
        </div>
        </div>
        
        </div>
        </React.Fragment>
        )
    }
}