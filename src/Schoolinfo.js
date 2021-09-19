import React, { Component } from 'react'
import './Welcome.css';
import study from "./study.jpg"
export default class Schoolinfo extends Component {
    render() {
        return (
            <React.Fragment>
                
                        <div  >
                            <h6 className="pt-4">School Information</h6>
                            <div className="row">
                                <div className="col-md-4">
                                <img className="mt-3 left" src={study} width="200px" height="200px"/>
                            </div>
                                <div className="col-md-8 mt-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid fugiat illo, voluptas esse consectetur earum vel magnam architecto eos.<br/><br/>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur adipisci iusto esse quae voluptatum soluta eius similique deserunt ducimus reiciendis suscipit, amet provident dolores! Repudiandae voluptas voluptates nulla ipsam quisquam ab placeat natus necessitatibus molestias!</p>
                                </div>
                            </div>
                        
                        </div>
                    
            </React.Fragment>
        )
    }
}
