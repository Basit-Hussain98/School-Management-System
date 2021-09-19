import React, { Component } from 'react'

export default class ViewExamDetail extends Component {
    render() {
        return (
            <div>
                <h6>Exam Timetable</h6>
                <div className="row">
                    <div className="col-md-12">
                    <table className=" text-center mt-1 ">
  <thead>
    <tr>
      
      <th>S.No</th>
      <th>Exam Term</th>
      <th>Class Name</th>
      <th>Subject</th>
      <th>Date</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>First Term</td>
      <td >BSCS</td>
      <td >English</td>
      <td> 01-21-2020 </td>
    </tr>
    <tr>
    <th >2</th>
      <td>First Term</td>
      <td >BSCS</td>
      <td >Urdu</td>
      <td> 01-21-2020 </td>
    </tr>
    <tr>
    <th >3</th>
      <td>First Term</td>
      <td >BSCS</td>
      <td >Programming</td>
      <td> 01-21-2020 </td>
    </tr>
    <tr>
    <th >4</th>
      <td>First Term</td>
      <td >BSCS</td>
      <td >Calculus</td>
      <td> 01-21-2020 </td>
    </tr>
  </tbody>
</table>
                    </div>
                </div>
            </div>
        )
    }
}
