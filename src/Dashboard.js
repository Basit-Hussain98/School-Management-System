import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'


export default class Dashboard extends Component {
    render() {
        return ( 
            <React.Fragment>
              
                      <div className="  mb-3 dash pl-3 pt-2">
                          <h6 className=" text-center my-4" >Dashboard</h6 >
                          <hr className="line" />
                          <Link to="/schoolinfo">School Information</Link>
                          <hr/>
                          <Link to="/addclass">Add Class</Link><hr/>
                          <Link to="/addsubj">Add Subject</Link><hr/>
                          <Link to="/addstudent">Add Student</Link><hr/>
                          <Link to="/viewstudent">View Student</Link><hr/>
                          <Link to="/addstaff">Add Staff</Link><hr/>
                          <Link to="/viewstaff">View Staff</Link><hr/>
                          <Link to="/setexam">Set Exam</Link><hr/>
                          <Link to="/viewexam">View Exam</Link><hr/>
                          
                      </div>
                  
              
            </React.Fragment>
        )
    }
}

