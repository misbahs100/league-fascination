import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './League.css';
import { Link } from 'react-router-dom';

const League = (props) => {
    // console.log(props.league) 
    const { idLeague, strLeague, strSport, strBadge } = props.league;

    return (
        <div className="league">
            {/* <h1>id: {idLeague}</h1>
            <h2>Name: {strLeague}</h2> */}
            <Card style={{ width: '18rem' , height: '16rem', borderRadius: '10px', boxShadow: '5px 5px 5px 5px lightgray'}}>
                <div className="text-center">
                    <Card.Img variant="top" src={strBadge} style={{width: '5rem', marginTop: '5px'}}/>
                </div>
                <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>{strLeague}</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                        Sports type: {strSport}
                    </Card.Text>
                    <div className="button-div">
                        
                        <Link to={`/league/${idLeague}`}>
                           <button className="btn btn-success exploreBtn"><b>Explore</b> <FontAwesomeIcon icon={faArrowRight} /></button>    
                        </Link>                        
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;