import React from 'react';
import './App.css';
// import $ from jquery;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link, NavLink , BrowserRouter, Route, Switch} from 'react-router-dom'
import jquery from 'jquery';
import "react-image-gallery/styles/css/image-gallery.css";
import NavbarDesktop from './components/Navbar/NavbarDesktop'
import NavbarMobile from './components/Navbar/NavbarMobile'
import Carousel from './components/Carousel/Carousel0'
import Product from './components/products/SingleProduct/Product'
import AllProducts from './components/products/AllProducts'
import Home from './components/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import ProductDetails from './components/products/ProductDetails/ProductDetails'
import Cart from './components/products/Cart/Cart'



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavbarDesktop/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/all" component={AllProducts}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/product_:product_id" component={ProductDetails}/>
        </Switch> 
      </div>
    </BrowserRouter>
    
  );
}

export default App;