import React, { Component } from 'react'
import {Link, NavLink , BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './Login.css'
import { connect } from 'react-redux'
import { SignIn } from '../Actions/AuthActions'
import { withSwalInstance } from 'sweetalert2-react';
// import SweetAlert from 'sweetalert2-react';
// const SweetAlert = withSwalInstance(Swal);
import Swal from 'sweetalert2'




export class Login extends Component {


    state={
        Email: "",
        password: ""
    }
 
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
        const { auth }= this.props;
    }

    render() {

        const { auth }= this.props;
        if(auth.uid){
            Swal.fire({title: 'Success!', text: 'You have Logged In',icon: 'success', confirmButtonText: 'Cool'})
            return <Redirect to="/"/>
        } 
        

        return (
            <div>
                <div className="card-body " style={{marginTop: "125px"}}>

                    <article className="card mx-auto main-card">

                        <h4 className="card-title mt-3 p-3 text-center" style={{}}>Log in</h4>


                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group input-group">

                                <div className="input-group-prepend">
                                    <span className="input-group-text icon-fleld"> 
                                    <i className="fa fa-envelope"></i> </span>
                                </div>

                                <input id="Email" className="form-control text-field" placeholder="Email address" type="email" onChange={this.handleChange}/>
                            </div> 

                            <div className="form-group input-group">

                                <div className="input-group-prepend">
                                    <span className="input-group-text icon-fleld"> 
                                    <i className="fa fa-lock"></i> </span>
                                </div>
                                
                                <input id="password" className="form-control text-field" placeholder="password" type="password" onChange={this.handleChange}/>
                            </div> 

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary main-btn"> Log In</button>
                            </div>     
                           
                            <p className="text-center">Don't have an account? Sign up &nbsp;
                                <NavLink to="/Signup">here</NavLink>  
                            </p>    

                        </form>
                    </article>
                </div> 

            </div>
        )
    }
}


const mapStateToProps=(state)=>{

    // AuthError is from the redux action
    // auth is from firebase

    return{
        AuthError: state.auth.authError,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps= (dispatch)=>{
    return{
        signIn: (creds)=> dispatch(SignIn(creds))
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
