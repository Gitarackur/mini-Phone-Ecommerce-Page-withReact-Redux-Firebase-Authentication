import React from 'react'
import {Link, NavLink , BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'
import Product from './products/SingleProduct/Product'
import AllProducts from './products/AllProducts'
import Carousel from './Carousel/Carousel0'
import Carousel1 from './Carousel/Carousel1'
import Carousel2 from './Carousel/Carousel2'
import Carousel3 from './Carousel/Carousel3'
import ProductDetails from './products/ProductDetails/ProductDetails'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Footer from './Footer/Footer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'







const Home = (props) => {

  const { auth }= props

  if(!auth.uid) return <Redirect to="/Login"/>

    return(
          <div className="App">
            <Carousel/>  
            <div className="bg-white">
              <Carousel1/>
              <Carousel2/>
            </div>
            <Carousel3/>
            <Footer/>
          </div>
      );
}



const mapStateToProps=(state)=>{

  // AuthError is from the redux action
  // auth is from firebase

  return{
      AuthError: state.auth.authError,
      auth: state.firebase.auth
  }
}



export default connect(mapStateToProps)(Home)
















