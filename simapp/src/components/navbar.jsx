import React, { Component } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">MovieRentals</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/movies">Movies <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/customers">Customers</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/rentals">Rentals</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;