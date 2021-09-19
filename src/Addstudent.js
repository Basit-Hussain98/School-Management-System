import React, { Component } from 'react'
import './Addclass.css'

export default class Addstudent extends Component {
    render() {
        return (
            <div>
                <h6>Add Student Details</h6>
                <div className="row">
                    <div className="col-md-12">
                    <form className="form-group w-50">
                    <label>Roll No</label>
                    <input type="number" className="form-control"/>
                    <label>Name</label>
                    <input type="text" className="form-control"/>
  
                    <label>Father Name</label>
                    <input type="text" className="form-control"/>
                    <label>DOB</label>
                    <input type="date" className="form-control"/>
                    <label>Phone</label>
                    <input type="number" className="form-control"/>
                    <label>Address</label>
                    <input type="text" className="form-control"/>
                    <label>Class</label>
                    <input type="text" className="form-control"/>
                    <label>Section</label>
                    <input type="text" className="form-control"/>
                    <button className=" button w-50  text-white  mt-4">Add Student</button> 

                </form>
                    </div>
                </div>
            </div>
        )
    }
}
