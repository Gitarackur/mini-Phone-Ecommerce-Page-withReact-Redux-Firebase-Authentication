import React from 'react'
import {Link, NavLink , BrowserRouter, Redirect} from 'react-router-dom'
import styled from 'styled-components'



const Flex= styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    @media (max-width: 768px) {
        align-items: start;
        flex-direction: column;
        flex-flow: column nowrap;
    }
`


const SignedOutLinks = () => {
    return (
        <Flex >
            <NavLink  to="/Login">LOG IN</NavLink>
            <NavLink  to="/Signup">SIGN UP</NavLink>
        </Flex>
    )
}

export default SignedOutLinks
