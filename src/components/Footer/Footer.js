import React from 'react'

import './Footer.css'

const Footer = () => {
    return (
            <footer className="footter">
                <div className="container py-5">
                    <div className="row py-3">
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">About</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="">About Us</a></li>
                                <li className="mb-2"><a href="#" className="">Stories</a></li>
                                <li className="mb-2"><a href="#" className="">Press</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">Help</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="">Payments</a></li>
                                <li className="mb-2"><a href="#" className="">Shipping</a></li>
                                <li className="mb-2"><a href="#" className="">Cancellation</a></li>
                                <li className="mb-2"><a href="#" className="">Returns</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">Policy</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="">Return Policy</a></li>
                                <li className="mb-2"><a href="#" className="">Terms Of Use</a></li>
                                <li className="mb-2"><a href="#" className="">Security</a></li>
                                <li className="mb-2"><a href="#" className="">Privacy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="">Login</a></li>
                                <li className="mb-2"><a href="#" className="">Register</a></li>
                                <li className="mb-2"><a href="#" className="">Sitemap</a></li>
                                <li className="mb-2"><a href="#" className="">Our Products</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0">

                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">Registered Office Address</h6>
                            <p className="text-white mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>


                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fab fa-2x fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="p-0 m-0 b-0"/>

                <div className="py-2">
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">© 2020 All rights reserved.</p>
                        <p className="text-muted mb-0 py-2">Made By Gitarackur</p>
                    </div>
                </div>

            </footer>
    )
}

export default Footer
