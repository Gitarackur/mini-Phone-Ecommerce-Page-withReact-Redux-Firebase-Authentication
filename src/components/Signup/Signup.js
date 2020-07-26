import React, { Component } from 'react'
import {Link, NavLink , BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './Signup.css'
import Login from '../Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { SignUp } from '../Actions/AuthActions'



class Signup extends Component {

    state= {
        Name: "",
        Email:"",
        Password:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.signUp(this.state)
    }


    render() {

        const { auth }= this.props;
        if(auth.uid) return <Redirect to="/"/> 
        
        return (
            <div>
                <div className="card-body" style={{marginTop: "125px"}}>

                    <article className="card mx-auto main-card">

                        <h4 className="card-title mt-3 p-3 text-center">Sign Up</h4>
                        
                        <p>
                            <a href="" className="btn btn-block btn-google"> 
                            <i className="fab fa-google"></i>&nbsp; &nbsp; Login via Google</a>
                        </p>



                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>



                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group input-group">
                        
                                <div className="input-group-prepend">
                                    <span className="input-group-text icon-fleld"> <i className="fa fa-user"></i> </span>
                                </div>

                                <input id="Name" className="form-control text-field" placeholder="Name" type="text" onChange={this.handleChange}/>
                            </div> 


                            <div className="form-group input-group">

                                <div className="input-group-prepend">
                                    <span className="input-group-text icon-fleld"> <i className="fa fa-envelope"></i> </span>
                                </div>

                                <input id="Email" className="form-control text-field" placeholder="Email address" type="email" onChange={this.handleChange}/>
                            </div> 




                            <div className="form-group input-group">

                                <div className="input-group-prepend">
                                    <span className="input-group-text icon-fleld"> <i className="fa fa-lock"></i> </span>
                                </div>
                                
                                <input id="Password" className="form-control text-field" placeholder="Create password" type="password" onChange={this.handleChange}/>
                            </div> 
                            
                            <div>
                                {this.props.authError}
                            </div>


                            <div className="form-group">
                                <button type="submit" className="btn btn-primary main-btn mx-auto"> Create Account</button>
                            </div>   

                            <p className="text-center">Have an account? &nbsp;
                                <NavLink to="/Login"> Log In</NavLink> 
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

    console.log(state);
    return{
        auth: state.firebase.auth,
        AuthError: state.auth.authError
        
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        signUp: (newUser)=> dispatch(SignUp(newUser)),
    }
    
}



export default connect(mapStateToProps, mapDispatchToProps)(Signup)

