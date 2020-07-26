import React from 'react'

import styled from 'styled-components'

import './Search.css'



const SearchBar= styled.form`

    display: flex;
    align-items: center;
    // justify-content: space-between;
    width: 35%;
    background-color: transparent;
    padding: 10px;

    @media (max-width: 768px) {
        display: none;
    }
`

const maskDiv= styled.div`
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    width: 100%;
`


const Search = () => {
    return (
        <SearchBar onClick={(e)=>{e.preventDefault()}}>
            
            <input className="form-control inp" placeholder="search your goods here"/>
            <button className="btn sear"><i className="fa fa-search" aria-hidden="true"></i></button>
               
        </SearchBar>
    )
}

export default Search
