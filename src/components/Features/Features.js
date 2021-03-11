import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Features.css';

const Features = () => {
    return (
        <div className="features">

            <Navbar></Navbar>
            <div className="container">
                <h2 className="text-primary text-center mt-5">Welcome to features box.</h2>
                <h4 className="mt-5">User features:</h4>
                <ol>
                    <li>Responsive(PC and Mobile) website</li>
                    {/* <li>User can see all of the sport-leagues throughout the world.</li> */}
                    <li>User can explore individual league's information by just clicking the Explore button.</li>
                    <li>User can see individual league banner while exploring.</li>
                    <li>A working navbar is helping the user through direct navigation/route of react-router.</li>
                </ol>
                <h4>Css features:</h4>
                <ol>
                    <li>Cards are beautifully presented.</li>

                </ol>
            </div>
        </div>
    );
};

export default Features;