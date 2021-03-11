import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = (props) => {
    const { banner, name } = props;    // destructuring
    return (
        <div>
            <Navbar></Navbar>
            <div className="header">
                {(banner === "default")
                    ? <h2 className="heading">League Fascination</h2>
                    : ((banner === null)
                        ? <h2 className="heading">{name}</h2>
                        : <img src={banner} alt="" />)
                }
            </div>
        </div>
    );
};

export default Header;