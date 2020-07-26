import React, { Profiler } from 'react'
import {Link, NavLink , BrowserRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { SignOut } from '../Actions/AuthActions'
import styled from 'styled-components'
// import swal from 'sweetalert';
// import SweetAlert from 'sweetalert2-react';
// import SignedOutLinks from "./SignedOutLinks";
// import Login from '../Login/Login'
// import Signup from '../Signup/Signup'




const Flex= styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    @media (max-width: 768px) {
        align-items: start;
        flex-direction: column;
        flex-flow: column nowrap;
    }
`


const SignedInLinks = (props) => {

    return (
        <Flex >
            <NavLink  to="/all">ALL ITEMS</NavLink>
            <NavLink  to="/Cart"><i className="fa fa-shopping-cart" aria-hidden="true"><span></span></i></NavLink>
            
            <a onClick={props.SignOut} style={{cursor: "pointer"}}>LOGOUT</a>
            
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{width: "70px", height: "70px", marginLeft: "30px", backgroundColor: "white", color: "red", cursor: "pointer"}} alt="50x50"
            data-holder-rendered="true">
               {props.profile.initials}INITT
            </div>
        </Flex>
    )
}



const mapStateToProps=(state)=>{

    console.log(state)

    // AuthError is from the redux action
    // auth is from firebase 

    // let MainCart= state.cart.Cart;
    let cartItems= state.firestore.ordered.cart;

    return{
        AuthError: state.auth.authError,
        auth: state.firebase.auth,
        cart: cartItems
    }
}



const mapDispatchToProps= (dispatch)=>{
    return{
        SignOut: ()=> dispatch(SignOut())
    }
    
}



export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
