import React, {useState} from 'react'
import styled from 'styled-components'
import '../Search/Search.css'
import {Link, NavLink , BrowserRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { AddToTheCart } from '../Actions/CartActions'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";




const Ul= styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    
    a{
        text-decoration: none;
        padding: 18px 10px;
        display: block;
        color: white;
    }

    a.active{
        text-decoration: underline;
    }


    .fa-shopping-cart{
        border-radius: 50%;
        padding: 2%
        background-color: white;
        padding: 18px 10px;
        display: block;
    }


    
    @media (max-width: 768px) {
        align-items: start;
        flex-direction: column;
        flex-flow: column nowrap;
        background-color: #0d2538;
        transform:  ${({open}) => open ? `translateX(0%)` : `translateX(100%)`};
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 5rem; 
        transition: transform 0.3s ease-in-out;
        z-index:20;

        a{
            display: block;
            padding: 18px 30px;
            text-align: left;
        }
    }

    @media (max-width: 300px) {
        width: 100%;
    }

`

const SearchBarMobile= styled.form`
    width: 100%;
    background-color: transparent;
    padding: 10px;

    display: flex;
    justify-content: space-between;


    @media (min-width: 768px) {
        display: none;
    }
`



const NavbarLinks = (props) => {

    const { auth, profile }= props;
    const ShowLinks = auth.uid ? <SignedInLinks profile={profile}/>: <SignedOutLinks/>

    return (
        
        <>
            <Ul open={props.open}>


                <SearchBarMobile open={props.open}>
                    <input className="form-control inp" placeholder="search your goods here"/>
                    <button className="btn sear"><i className="fa fa-search" aria-hidden="true"></i></button>
                </SearchBarMobile>

                {ShowLinks}
               
            </Ul>
        </>
        
    )
}




const mapStateToProps = (state)=>{

    let MainCart= state.cart.Cart;
    let cartItems= state.firestore.ordered.cart;
 
    return{
        cart: cartItems,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavbarLinks)
