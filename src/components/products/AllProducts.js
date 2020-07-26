import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {Link, NavLink , BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Product from './SingleProduct/Product'
import Pagination from './Pagination'
// import './Product.css'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'







const AllProducts = ({phones, auth}) => {

    const AllPhones = phones;

    // using hooks to control some pagination functions
    const [currentPage, setCurrentPage]= useState(1);
    const [productsPerPage]= useState(8);

    // get index of last posts,indexOfFirstPost, indexOfLastPost,currentPage and postsPerPage
    const indexOfLastProduct= currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct -  productsPerPage;
    const currentProducts= AllPhones.slice(indexOfFirstProduct, indexOfLastProduct);

    let pageNo= 0;

    //change page (passing the number of the page as an argument)

    const paginate= (pageNumber) => setCurrentPage(pageNumber)


    if(!auth.uid) return <Redirect to="/Login"/>

    return (
        <div className="container-fluid">
            <h2 className="p-5" style={{marginTop:"100px"}}>ALL PRODUCTS</h2>
            <div className="row">
                {
                    currentProducts && currentProducts.map(phone =>{
                        return(
                            <>
                                <Product phone={phone} key={phone.id}/>
                            </>
                        )
                    })
                }
            </div>

            <Pagination productsPerPage={productsPerPage} totalProducts={AllPhones.length} paginate={paginate}/>
        </div>
    )


}




const MapStateToProps= (state)=>{
    
    return{
        cart: state.cart.Cart,
        phones: state.products.phones,
        auth: state.firebase.auth
    }
    
}


export default connect(MapStateToProps)(AllProducts)




















//----------------------------------------------------------------------------------------------//

//AN ALTERNATIVE WAY OF FETCHING ALL PRODUCTS(DO NOT DELETE.. TO BE KEPT FOR REFERENCE PURPOSES!!!)


    // const AllProductsLists= AllPhones.length?(
    //     AllPhones.map(phone =>{
    //         return(
    //             <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3" key={phone.id}>
    //                 <figure className="card card-product-grid card-lg"> 
    //                     <a href="#" className="img-wrap" data-abc="true"><img src={phone.images[0]}/></a>

    //                     <figcaption className="info-wrap">

    //                         <div className="row">
    //                             <div className="col-md-12"> 
    //                                 <h5 className="title" data-abc="true">{phone.title}</h5> 
    //                             </div>

    //                             <div className="col-md-12">
    //                                 <div className="rating "> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
    //                             </div>
    //                         </div>

    //                     </figcaption>

    //                     <div className="bottom-wrap"> 
    //                         <div className="price-wrap">
    //                             <span className="price h5">{phone.price}</span> 
    //                             <br/> 
    //                             <small className="text-success">Free shipping</small> 
    //                         </div>
    //                     </div>

    //                 </figure>
    //             </div>
    //         )
    //     })
    // ):(
    //     <div>
    //         No Products
    //     </div>
    // )


    // return (
    //     <div className="container-fluid">
    //         <div className="row">
    //             { AllProductsLists }
    //         </div>
    //     </div>
    // )




//---------------------- END ---------------------------------------------//