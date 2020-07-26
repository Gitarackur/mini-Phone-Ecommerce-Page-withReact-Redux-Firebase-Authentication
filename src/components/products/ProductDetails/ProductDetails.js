import React, { Component } from 'react'

import {Link, NavLink , BrowserRouter, Route, Switch} from 'react-router-dom'

import './ProductDetails.css'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Lightbox from 'react-images-zoom';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { AddToTheCart } from '../../Actions/CartActions'

import SweetAlert from 'sweetalert2-react';

import Swal from 'sweetalert';

const el = document.createElement('div')
el.innerHTML = "Here's a <Link to='/cart'>Cart</Link>"


export class ProductDetails extends Component {

    state ={
        inCart: true
    }



    AddToCart= (e)=>{
        e.preventDefault();
        this.props.AddToCart(this.props.Phone);
        Swal({
            title: "Added To Cart!",
            icon: "success",
            // button: "Aww yiss!",
            footer: '<a href>Why do I have this issue?</a>'
          });

    }

    render() {

        // let CartItemIndex =  this.props.cart.findIndex(item => item.id === this.props.Phone.id);

        const SinglePhone= this.props.Phone ? (
            <div className="product-body" key={this.props.Phone.id}>
                <div className="mainn-card" style={{marginTop: "0px"}}>
                    
                    <div className="row Description">

                        <div className="col-md-6 text-center mb-5"> 

                            <ImageGallery items={
                               [
                                {
                                  original: this.props.Phone.images[0],
                                  thumbnail: this.props.Phone.images[0],
                                },
                                {
                                  original: this.props.Phone.images[0],
                                  thumbnail: this.props.Phone.images[0],
                                },
                                {
                                  original: this.props.Phone.images[0],
                                  thumbnail: this.props.Phone.images[0],
                                },
                                {
                                    original: this.props.Phone.images[0],
                                    thumbnail: this.props.Phone.images[0],
                                }
                              ]
                            } 
                            
                            showFullscreenButton={false} showPlayButton={false}
                            infinite={false} showNav={false}
                            />

                        </div>


                        <div className="col-md-6 text-left">

                            <h3 className="title mb-3">{this.props.Phone.title}</h3>

                            <div className="mb-3">
                                <span className="font-weight-bold">Ratings: &nbsp; &nbsp;</span>
                                <span className="fa fa-star checked"></span> 
                                <span className="fa fa-star checked"></span> 
                                <span className="fa fa-star checked"></span> 
                                <span className="fa fa-star checked"></span> 
                                <span className="fa fa-star-half-full"></span> 
                            </div>

                            <p className="price-detail-wrap"> 
                                <span className="price h3 text-warning"> 
                                    <span className="currency">$</span>
                                    <span className="num">{Math.ceil(this.props.Phone.price)}</span>
                                </span> 
                            </p> 

                            <dl className="item-property">
                                <dt className="text-warning">Description</dt>
                                <dd>
                                    <p>{this.props.Phone.description}</p>
                                </dd>
                            </dl>


                            <dl className="param param-feature">
                                <dt className="text-warning">Model#</dt>
                                <dd>{this.props.Phone.brand}</dd>
                            </dl>  

                            <dl className="param param-feature">
                                <dt className="text-warning">Size</dt>
                                <dd>{this.props.Phone.size}</dd>
                            </dl>  

                            <dl className="param param-feature">
                                <dt className="text-warning">Battery</dt>
                                <dd>{this.props.Phone.battery}</dd>
                            </dl>  

                            <dl className="param param-feature">
                                <dt className="text-warning">Memory</dt>
                                <dd>{this.props.Phone.memory}</dd>
                            </dl> 

                            <dl className="param param-feature">
                                <dt className="text-warning">Camera</dt>
                                <dd>{this.props.Phone.camera}</dd>
                            </dl> 

                            <dl className="param param-feature">
                                <dt className="text-warning">CPU</dt>
                                <dd>{this.props.Phone.cpu}</dd>
                            </dl> 


                            <dl className="param param-feature">
                                <dt className="text-warning">Display</dt>
                                <dd>{this.props.Phone.display}</dd>
                            </dl> 

                            <button className="btn btn-lg btn-primary text-uppercase"> Buy now </button>
                            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;

                            <button className="btn btn-lg btn-primary text-uppercase" onClick={this.AddToCart}>
                                <i className="fas fa-shopping-cart"></i> 
                                Add to cart 
                            </button>              

                            <div className="panel-heading mt-5">
                                <dt className="text-warning">Payment Details</dt>
                                <div className="inlineimage"> 
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"/> 
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"/> 
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"/> 
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"/> 
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        
        ):
        
        (
            
            <div className="container">
                <h1>Loading Product.....</h1>
            </div>
        
        )
        

        return (
            <div style={{marginTop: "120px"}}>
                <h1 className="font-weight-bold mt-5 text-warning">PRODUCT DESCRIPTION</h1>
                {SinglePhone}
            </div>
        )
    }
}




const MapStateToProps= (state, ComponentProps)=>{
        
    const id= parseInt(ComponentProps.match.params.product_id);
    let singlephone= state.products.phones.find(phone => phone.id === id);

    let MainCart= state.cart.Cart;
    let cartItems= state.firestore.ordered.cart;

    return{
        cart: cartItems,
        Phone: singlephone
    }
}


const mapDispatchToProps= (dispatch)=>{

    return{
        AddToCart: (product)=>{
            dispatch(AddToTheCart(product));
        }
    
    }
}




export default  compose(connect(MapStateToProps, mapDispatchToProps),
    firestoreConnect(ownProps  =>[
        {
            collection: "cart",
            orderBy: ["date", "desc"]
        }  
    ])
)(ProductDetails)









