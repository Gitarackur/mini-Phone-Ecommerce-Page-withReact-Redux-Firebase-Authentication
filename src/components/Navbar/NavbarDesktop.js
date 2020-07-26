import React from 'react'

import styled from 'styled-components'

import {Link, NavLink , BrowserRouter} from 'react-router-dom'

import { connect } from 'react-redux'

import { compose } from 'redux'

import { firestoreConnect } from 'react-redux-firebase'

import Burger from '../Burger/Burger'
import Search from '../Search/Search'





const Nav= styled.nav`
    background-color: #0d2538;
    color: #fff;
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    

    .logo{
       padding: 18px 0;
       font-weight: bold;
       display: flex;
       align-items: center;
       justify-content: center;
    }
    
    @media (max-width: 768px) {
       
    }

`




const NavbarDesktop = (props) => {

    return (
        <Nav className="container-fluid fixed-top">

            <div className="logo">
                <NavLink  to="/">
                    <h1>LOGO</h1>
                </NavLink >
            </div>    

            <Search/>

            <Burger/> 
             
        </Nav>
    )
}


const mapStateToProps= (state)=>{

    return{
      ...state  
    }
}

export default connect(mapStateToProps)(NavbarDesktop)
