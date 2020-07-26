import React from 'react'

import {Link, NavLink , BrowserRouter, Route, Switch} from 'react-router-dom'

import './Product.css'

const ProductTemplate = ({phone}) => {
    return (
        <div>
            <Link to={"/product_" + phone.id} key={phone.id}>
                <div className="">
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
                </div>
            </Link>
        </div>
    )
}

export default ProductTemplate
