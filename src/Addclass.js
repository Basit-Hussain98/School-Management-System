import React, { Component } from 'react'
import './Addclass.css'

export default class Addclass extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Add Class Details</h6>
                            <form className="form-group ">
                                <label className="mt-5" for="class">Class Name</label>
                                 <input className="form-control w-75 " type="text" />
                                 
                                <label className="pt-3" for="section">Section</label>
                                 <input className="form-control w-75" type="text" />
                                 <button className=" button   text-white  mt-4">Add Class</button> 

                            </form>
                    </div>
                    <div className="col-md-6">
                        <h6>Class Details</h6>
 <table className=" text-center mt-5 ">
  <thead>
    <tr>
      
      <th>S.No</th>
      <th>Class</th>
      <th>Section</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>Bs</td>
      <td>Cs</td>
      <td> <button className="delete   text-white  ">Delete</button> 
</td>
    </tr>
    <tr>
      <th >2</th>
      <td>Bs</td>
      <td>CE</td>
      <td><button className="delete   text-white  ">Delete</button> </td>
    </tr>
    <tr>
      <th >3</th>
      <td >Ms</td>
      <td>CS</td>
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
