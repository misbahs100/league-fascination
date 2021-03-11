import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect( () => {  
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England")
        .then(res => res.json())
        .then(data => setLeagues(data.countrys))
    }, [])
    
    return (
        <div >
            <Header banner="default"></Header>
           <div className="league-container container">
           {
                leagues.map(league => <League league={league} key={league.idLeague}></League>)
            }
           </div>
        </div>
    );
};

export default Home;