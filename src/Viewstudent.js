import React, { Component } from 'react'
import "./Addclass.css"

export default class Viewstudent extends Component {
    render() {
        return (
            <div>
                  <h6 className="text-center">View Student Details</h6>
                       
                <div className="row">
                    
                    <div className="col-md-6 faltu">
                       <form className="form-group ">
                                <label className="mt-5" for="roll">Roll No</label>
                                 <input className="form-control w-75 " type="number" />
                                 
                                <label className="pt-3" for="section">Section</label>
                                 <input className="form-control w-75" type="text" />
                                
                            </form>

                    </div>
                    <div className="col-md-6 ">
                        <form className="form-group ">
                        <label className="" for="class">Class</label>
                            <input className="form-control w-75" type="text" />
                            <button className=" button  text-white  mt-4">View Details</button> 

                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                    <h6 className="text-center mb-5">Student Details</h6>
 <table className=" text-center mb-5  ">
  <thead>
    <tr>
      
      <th>Roll NO</th>
      <th>Name</th>
      <th>Father Name</th>
      <th>DOB</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Class</th>
      <th>Section</th>
    </tr>
  </thead>
  <tbody>
    <tr className="mb-5">
      <th >33</th>
      <td>Shakir Randhawa</td>
      <td>Naeem Randhawa</td>
      <td >21-06-1990</td>
      <td >03445449863</td>
        <td>Rawalpindi</td>
        <td>BE</td>
        <td>IT</td>
        
      
    </tr>
    </tbody>
</table>
               
                    </div>
                </div>
            </div>
        )
    }
}
