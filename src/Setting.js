import React, { Component } from 'react'
import './Addclass.css'

export default class Setting extends Component {
    render() {
        return (
            <div>
                <h6>Change Password</h6>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-group w-50">
                            <label>Old Password</label>
                            <input type="password" className="form-control"/>
                            <label>New Password</label>
                            <input type="password" className="form-control"/>
                            <label>Confirm Password</label>
                            <input type="password" className="form-control"/>
                            <button className=" button w-50 text-white  mt-4">Change Password</button> 

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
