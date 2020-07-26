import React from 'react'

import {Link, NavLink } from 'react-router-dom';


const Pagination = ({ productsPerPage, totalProducts, paginate}) => {
    const pageNumbers= [];

    for( let i= 1; i<= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }

    let pageNo= 2;
    pageNo++

    return (
        <nav>
            <ul className="pagination d-flex justify-content-center mt-5 mb-5">

                {/* <li key={pageNo} className="page-item">
                    <a href= "#" onClick={() => paginate(pageNo)} className="btn btn-primary page-link p-3 m-2">
                        Prev
                    </a>
                </li> */}

                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href= "#" onClick={() => paginate(number)} className="btn btn-primary page-link p-3 m-2">
                            {number}
                        </a>

                    </li>
                ))}

                {/* <li key={pageNo} className="page-item">
                    <a href= "#" onClick={() => paginate(pageNo)} className="btn btn-primary page-link p-3 m-2">
                        Next
                    </a>
                </li> */}

            </ul>
        </nav>
    )
}

export default Pagination
