import React from 'react';
import image from '../../images/bg-2.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light league-nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home"><img src={image} alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            <a class="nav-link" href="/features">Features</a>
                            <a class="nav-link" href="/about">About</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;