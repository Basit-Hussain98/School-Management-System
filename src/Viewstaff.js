import React, { Component } from 'react'
import './Addclass.css'

export default class Addclass extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <h6>View Staff Details</h6>
                            <form className="form-group ">
                                <label className="mt-5" for="class">Staff Name</label>
                                 <input className="form-control w-100 " type="text" />
                               <button className=" button   text-white  mt-4">View staff</button> 

                            </form>
                    </div>
                    
                    
                    <div className="col-md-7">
                        <h6 className="text-center mb-5">Staff Details</h6>
 <table className=" text-center mt-1 ">
  <thead>
    <tr>
      
      <th>S.No</th>
      <th>Name</th>
      <th>Qualification</th>
      <th>Salray</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>Shakir Randhawa</td>
      <th >BSCS</th>
      <th >20000</th>
      <td> <button className="delete   text-white  ">Delete</button> 
</td>
    </tr>
    <tr>
      <th >2</th>
      <td>Arsl Qureshi</td>
      <th >BSCS</th>
      <th >40000</th>
      <td><button className="delete   text-white  ">Delete</button> </td>
    </tr>
    <tr>
      <th >3</th>
      <td >Usama Mahboob</td>
      <th >BSCE</th>
      <th >50000</th>
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
