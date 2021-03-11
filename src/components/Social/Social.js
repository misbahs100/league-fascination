import React from 'react';
import Header from '../Header/Header';
import './Social.css';

const Social = () => {
    // const {idLeague} = useParams();
    return (
        <div className="social">
            <Header banner="default"></Header>
            <h1 className="text-success">This is social.</h1>
        </div>
    );
};

export default Social;