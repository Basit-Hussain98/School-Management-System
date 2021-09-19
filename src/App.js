import React, { Component } from 'react'
import AdminNav from "./AdminNav";
import Addclass from "./Addclass"
import './bootstrap.css'
import {BrowserRouter, Route,Link} from 'react-router-dom'

import './App.css'
import Dashboard from './Dashboard';
import Setting from './Setting'
import Addstudent from './Addstudent'
import Schoolinfo from './Schoolinfo';
import Welcome from './Welcome';
import Addsubject from './Addsubject'
import Addstaff from './Addstaff'
import Viewstaff from './Viewstaff'
import Viewstudent from './Viewstudent'
import Footer from './Footer';
import Setexam from './Setexam';
import ViewExamDetail from './ViewExamDetail';
import Login from './Login'
import Contact from "./Contact"


export default class App extends Component {
    render() {
        return (
            <React.Fragment>

                <BrowserRouter>             
                    
                
                    <div className="container-fluid">
                    <Route  path="/" exact>
                        <div className="row">
                            <div className="col-md-12">
                                <Login/>
                            </div>
                        </div>
                        </Route>
                        <Route  path="/logout" >
                        <div className="row">
                            <div className="col-md-12">
                                <Login/>
                            </div>
                        </div>
                        </Route>
                        <Route  path="/login" >
                        <div className="row">
                            <div className="col-md-12">
                                <Login/>
                            </div>
                        </div>
                        </Route>
                        

                        <Route  path="/contact" exact>
                        <div className="row">
                            <div className="col-md-12">
                                <Contact/>
                            </div>
                        </div>
                        </Route>

                        <Route  path="/viewstudent" exact>
                        <AdminNav/>
                            <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <Viewstudent/>
                            </div>
                        </div>
                        </div>
                        </Route>
                        
                        <Route path="/schoolinfo">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Schoolinfo/>  
                            </div>
                    
                        </div>
                        </Route>

                        <Route path="/addclass">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Addclass/>  
                            </div>
                    
                        </div>
                        </Route>
                    
                    
                        <Route path="/addsubj">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Addsubject/>  
                            </div>
                    
                        </div>
                        </Route>
                        
                        <Route path="/addstaff">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Addstaff/>  
                            </div>
                    
                        </div>
                        </Route>
                        
                        <Route path="/viewstaff">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Viewstaff/>  
                            </div>
                    
                        </div>
                        </Route>
                        
                        <Route path="/setexam">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Setexam/>  
                            </div>
                    
                        </div>
                        </Route>
                        
                        <Route path="/viewexam">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <ViewExamDetail/>  
                            </div>
                    
                        </div>
                        </Route>
                        
                        <Route path="/addstudent">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Addstudent/>  
                            </div>
                    
                        </div>
                        </Route>
                        <Route path="/setting">
                        <div className="row">
                        <div className="col-md-12">
                                <AdminNav/>
                            </div>
                         
                            <div className="col-md-4 mt-5">
                               <Dashboard/>
                            </div>
                            <div className="col-md-8 mt-4">
                                <div className="pt-3">    <Welcome/> </div>
                                <Setting/>  
                            </div>
                    
                        </div>
                        </Route>
                        
                    </div> 
                </BrowserRouter>
                
               
                
                <Footer/>
            </React.Fragment>
                
                
        
        )
    }
}


