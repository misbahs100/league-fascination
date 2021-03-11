import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
            <h2 className="text-success text-center mt-5">Welcome to League Fascination</h2>
            <p className="mt-5">This is a <strong>Responsive</strong> website made of <code>react js</code>. </p>
            <p>A bunch of sport leagues throughout the world is shown in the <a href="/home">home</a> page.
                If an user explores any of the shown leagues, this website shows the 
                detail information of the selected league. This feature is done by <code>react-router</code>.
            </p>
            <p>API provider: <code>thesportsdb</code></p>
            </div>
        </div>
    );
};

export default About;