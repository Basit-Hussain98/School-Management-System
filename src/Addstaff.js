import React, { Component } from 'react'

export default class Addstaff extends Component {
    render() {
        return (
            <div>
                 <div className="row">
                    <div className="col-md-12">
                        <h6>Add Staff Details</h6>
                            <form className="form-group ">
                                <label className="mt-5" for="staff">Staff Name</label>
                                 <input className="form-control w-50 " type="text" />
                                 
                                <label className="mt-3" for="qualification">Qualification</label>
                                 <input className="form-control w-50 " type="text" />
                                 
                                <label className="mt-3" for="Salary">Salary</label>
                                 <input className="form-control w-50 " type="number" />
                               <button className=" button   text-white  mt-4">Add Staff</button> 

                            </form>
                    </div>
                    </div>
            </div>
        )
    }
}
