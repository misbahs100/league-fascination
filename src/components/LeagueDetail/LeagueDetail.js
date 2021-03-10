import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import malePic from '../../images/male.png';
import femalePic from '../../images/female.png';
import './LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faSearchLocation, faVenus } from '@fortawesome/free-solid-svg-icons';

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, [idLeague])
    console.log(leagueDetail);
    const { strBanner, strLeague, strGender, strDescriptionEN, strCountry, intFormedYear, strSport } = leagueDetail;
    return (
        <div>
            <Header banner={strBanner}></Header>

            <div className="container detail-container">
                <div className="league-detail d-flex container">
                    <div className="league-info">
                        <h2>{strLeague}</h2>
                        <p><FontAwesomeIcon icon={faSearchLocation} />Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />Sport Type: {strSport}</p>
                        <p>{(strGender === "Male")
                            ? <FontAwesomeIcon icon={faMars} />
                            : <FontAwesomeIcon icon={faVenus} />}
                        Gender: {strGender}</p>
                    </div>
                    <div className="league-pic">
                        {(strGender === "Male")
                            ? <img src={malePic} alt="" />
                            : <img src={femalePic} alt="" />
                        }

                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionEN}</p>

                </div>
            </div>
        </div>
    );
};

export default LeagueDetail;