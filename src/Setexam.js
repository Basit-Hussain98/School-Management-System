import React, { Component } from 'react'
import './Addclass.css'

export default class Setexam extends Component {
    render() {
        return (
            <div>
                <h6>Set Exam Timetable</h6>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-group w-75">
                            <label for="exam-term">Exam Term</label>
                            <select className="form-control">
                                <option>First Term</option>
                                <option>Second Term</option>
                                <option>Final Term</option>

                            </select>
                            <label for="class">Class Name</label>
                            <input type="text" className="form-control"/>
                            
                            <label for="class">Subject</label>
                            <input type="text" className="form-control"/>

                            
                            <label for="class">Exam Date</label>
                            <input type="date" className="form-control"/>
                            <button className=" button  w-25 text-white  mt-4">Add Exam Detail</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
