import React from 'react'

import NavbarLinks from './NavbarLinks'

import styled from 'styled-components'


const Nav= styled.nav`
    background-color: #efb000;
    color: #fff;
    width: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
    }
    
`

const NavbarMobile = () => {
    return (
        <Nav className="container-fluid">
             <div className="logo">
                NAVBAR LOGO
            </div>



            <div className="logo">
                <NavbarLinks/>   
                
            </div>
        </Nav>
    )
}

export default NavbarMobile
