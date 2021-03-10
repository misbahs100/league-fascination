import React from 'react';
import './Header.css';
import headerPic from '../../images/background.jpg';

const Header = (props) => {
    console.log(props.banner)

    return (
        <div className="header">
          
                {(props.banner === "nothing")
                    ? <h2 className="heading">League Fascination</h2>
                    : <img src={props.banner} alt="" />

                }
            

        </div>
    );
};

export default Header;