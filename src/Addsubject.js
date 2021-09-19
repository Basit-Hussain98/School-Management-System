import React, { Component } from 'react'
import './Addclass.css'

export default class Addclass extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Add Subject Details</h6>
                            <form className="form-group ">
                                <label className="mt-5" for="class">Subject Name</label>
                                 <input className="form-control w-75 " type="text" />
                               <button className=" button   text-white  mt-4">Add Subject</button> 

                            </form>
                    </div>
                    <div className="col-md-6">
                        <h6>Subject Details</h6>
 <table className=" text-center mt-5 ">
  <thead>
    <tr>
      
      <th>S.No</th>
      <th>Subject</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>English</td>
      <td> <button className="delete   text-white  ">Delete</button> 
</td>
    </tr>
    <tr>
      <th >2</th>
      <td>Mathematics</td>
      <td><button className="delete   text-white  ">Delete</button> </td>
    </tr>
    <tr>
      <th >3</th>
      <td >Programming</td>
      <td><button className="delete   text-white  ">Delete</button> </td>
    </tr>
  </tbody>
</table>
                    </div>
                </div>
            </div>
        )
    }
}
