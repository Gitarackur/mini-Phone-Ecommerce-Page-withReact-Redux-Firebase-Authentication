import React, { Component } from 'react'
import './Cart.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { AddToTheCart } from '../../Actions/CartActions'
import {Link, NavLink , BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../../Login/Login'
import Signup from '../../Signup/Signup'



class Cart extends Component {

    render() {
       
        const Cartt= this.props.auth.uid ? (
            Array.isArray(this.props.cart) && this.props.cart.length ?(

                this.props.cart.map(CartItem =>{
    
                    return(
                        <div  className="col-md-12" key={CartItem.id}>
                            
                            <ul className="list-group shadow">
    
                                <li className="list-group-item">
    
                                    <div className="media align-items-lg-center flex-column flex-lg-row p-0">
    
                                        <div className="media-body order-2 order-lg-1">
                                            <h5 className="mt-0 font-weight-bold mb-2">{CartItem.title}</h5>
                                            <p className="font-italic text-muted mb-0 p-0 small text-left text-justify">{CartItem.memory} | {CartItem.size}  {CartItem.weight} {CartItem.display} {CartItem.battery} | {CartItem.cpu}</p>
    
                                            <div className="d-flex align-items-center justify-content-between mt-1">
                                                <h6 className="font-weight-bold my-2">₹{Math.ceil(CartItem.price)}</h6>
                                                <h6 className="font-weight-bold my-2">Quantity: &nbsp; {CartItem.Quantity}</h6>
                                            </div>
    
                                        </div>
    
                                        <img src={CartItem.images[0]} alt="Generic placeholder image" width="200" className="mb-4 img-cart ml-lg-5 order-1 order-lg-2 d-flex align-items-center justify-content-center mx-auto"/>
                                    </div> 
    
                                </li>
                                
                            </ul>
    
                        </div>
                    )
                })
            )
            :(
                <div className="col-md-12 mt-2">
                    <div className="list-group d-flex align-items-center">
                        <div className="caart rounded p-5 mt-5 mx-auto shadow" style={{backgroundColor: "#0d2538", color: "white"}}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <h1 className="mt-4 mx-auto">No Product in Cart Yet</h1>
                    </div>
                </div>
            )
            ):(
                <Redirect to="/Login"/>
            )
    
        
        




        return (
            <div className="container-fluid main-cart-body">
                <div className="row">

                    <div  className="col-md-8">
                        {Cartt}
                    </div>
                    

                    <div className="col-md-4">
                        <div className="shadow p-3 total-price">
                            <div className="title">
                                <div className="p-3">
                                    <h3 className="font-weight-bold">DISCOUNT</h3>
                                    <span className="strike-text">$0.00</span>
                                </div>
                                
                                <div className="p-3">
                                    <h3 className="font-weight-bold">TOTAL PRICE</h3>
                                    <span className="strike-text">$0.00</span>
                                </div> 
                            </div>

                            <div className="d-flex flex-column mt-4">
                                <button className="btn btn-primary btn-sm" type="button">PROCEED TO CHECKOUT</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



const mapStateToProps= (state)=>{

    console.log(state.firebase.auth)
    console.log(state)


    let MainCart= state.cart.Cart;
    let cartItems= state.firestore.ordered.cart;

    return{
        cart: cartItems,
        auth: state.firebase.auth
    }

}





export default compose(
    connect(mapStateToProps), 
    firestoreConnect(ownProps  =>[
    {
        collection: "cart",
        orderBy: ["date", "desc"]
    }  
])
)(Cart);

