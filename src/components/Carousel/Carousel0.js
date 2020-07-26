import React from 'react'
import styled from 'styled-components'
import './Carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo from '../.././images/visa.jpg'
import Ecomm from '../.././images/Ecomm.png'
import Ecomm1 from '../.././images/Ecomm1.png'
import Ecomm2 from '../.././images/Ecomm2.png'
import Wan from '../.././images/30.svg'
import {Link, NavLink , BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'



const options = {
    margin: 0,
    responsiveClass: false,
    nav: false,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag:true,
    navText: ["Prev", "Next"],
    smartSpeed: 2000,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
  
        }
    },
  };

//   id="carousel-554496" id="carousel-554496"

const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide carousel-fade  mt-5" data-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active" style={{marginTop: "80px", marginBottom: "30px"}}>
                    <div className="mask flex-center">
                        <div className="container">
                            <div className="row align-items-center" >
                                <div className="col-md-7 col-12 order-md-1 order-2">
                                    <h4>iPhone XS</h4>
                                    <p>This has many features that are simply awesome. The phone comes with a 3.50-inch display with a resolution of 320x480 pixels.</p> 
                                    <br/> 
                                    <NavLink to="/all" className="btn rounded btn-lg font-weight-bold">View Product</NavLink>
                                </div>
                                <div className="col-md-5 col-12 order-md-2 order-1"><img src={Ecomm1} class="img-edit" alt="slide"/></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" style={{marginTop: "80px", marginBottom: "30px"}}>
                    <div className="mask flex-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-12 order-md-1 order-2">
                                    <h4>HP Pavillion</h4>
                                    <p>This has many features that are simply awesome.The phone comes with a 3.50-inch display with a resolution of 320x480 pixels.</p>
                                    <br/> 
                                    <NavLink to="/Cart" className="btn rounded btn-lg font-weight-bold">View Cart</NavLink>
                                </div>
                                <div className="col-md-6 col-12 order-md-2 order-1">
                                    <img src={Ecomm2} class="img-edit" alt="slide"/>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div> <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
        </div> 
    )
}

export default Carousel


