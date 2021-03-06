import React from 'react'

import styled from 'styled-components'

import { connect } from 'react-redux'
import { compose } from 'redux'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../products/SingleProduct/Product.css'

import Product from '../products/SingleProduct/Product'
import ProductTemplate from '../products/SingleProduct/ProductTemplate'


const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: false,
  mouseDrag: true,
  touchDrag:true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      576: {
          items: 2,
      },
      768: {
          items: 3,
      },
      992: {
          items: 4,
      },
      1200: {
          items: 4,

      }
  },
};


const Carousel2 = (props) => {
    return (
        <div>
            
            <div className="container mt-5">

                <h1 className="p-4">Best Deals</h1>

                <OwlCarousel className="owl-theme" {...options}>
                        {
                            props.newSlicedItems && props.newSlicedItems.map(phone =>{
                                return(
                                    <ProductTemplate phone={phone} key={phone.id}/>
                                )
                            })
                        }
                </OwlCarousel>
            </div>
            
        </div>
    )
}


const mapStateToProps = (state)=>{

    let newItems= state.products.phones.slice(0, 4);
    return{
        newSlicedItems: newItems
    }
}

export default connect(mapStateToProps)(Carousel2)
