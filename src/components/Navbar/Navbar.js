import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/bg-2.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light league-nav">
                <div class="container-fluid">
                    <Link to="/home"><img src={image} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                           
                            <Link to="/home"><p style={{ color: 'black' }}>Home</p></Link>
                            <Link to="/features"><p style={{ color: 'gray' }}>Features</p></Link>
                            <Link to="/about"><p style={{ color: 'gray' }}>About</p></Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;