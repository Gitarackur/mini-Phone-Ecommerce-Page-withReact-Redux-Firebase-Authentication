import React, {useState} from 'react'

import NavbarLinks from '../Navbar/NavbarLinks'

import styled from 'styled-components'

const StyledBurger= styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    appearance: button;
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 25;

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? `#ccc` :`#333`};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        background-color: #fff;

        &:nth-child(1) {
            transform:  ${({open}) => open ? `rotate(45deg)` : `rotate(0deg)`};
        }

        &:nth-child(2) {
            transform:  ${({open}) => open ? `translateX(100%)` : `translateX(0%)`};
            opacity: ${({open}) => open ? `0` : `1 `};
        }

        
        &:nth-child(3) {
            transform:  ${({open}) => open ? `rotate(-45deg)` : `rotate(0deg)`};
        }

        @media (min-width: 768px) {
            display: none;
        }

        
    } 
`

const Burger = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={()=> setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <NavbarLinks open={open}/>
        </>
    )
}

export default Burger
