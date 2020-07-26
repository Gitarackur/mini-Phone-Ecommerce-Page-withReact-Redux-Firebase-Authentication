import React, { Component } from 'react'

import {Link, NavLink , BrowserRouter, Route, Switch} from 'react-router-dom'

import { connect } from 'react-redux'

import styled from 'styled-components'

import './Product.css'

// import AllProduct from './AllProducts'

const Product = ({phone})=> {
  
    return (
        
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3" key={phone.id}>
            <Link to={"/product_" + phone.id}>
                <figure className="card card-product-grid card-lg"> 
                    <div className="img-wrap" data-abc="true"><img src={phone.images[0]}/></div>

                    <figcaption className="info-wrap">

                        <div className="row">
                            <div className="col-md-12"> 
                                <h5 className="title" data-abc="true">{phone.title}</h5> 
                            </div>

                            <div className="col-md-12">
                                <div className="rating "> 
                                    <i className="fa fa-star starr"></i> 
                                    <i className="fa fa-star starr"></i> 
                                    <i className="fa fa-star starr"></i> 
                                </div>
                            </div>
                        </div>

                    </figcaption>

                    <div className="bottom-wrap"> 
                        <div className="price-wrap">
                            <span className="price h5">$ {Math.ceil(phone.price)}</span> 
                            <br/> 
                            <small className="text-success">Free shipping</small> 
                        </div>
                    </div>

                </figure>
            </Link>
        </div>      
    )
}







export default Product

