import React from 'react';
import './bio.css';
import VenuePicture from './cabinvenue.jpg';


function Bio() {
    return ( 
        <div>
            <h1 style={{textAlign:'center'}}>About Us</h1> 
            <br />    
            <p style={{textAlign:'center'}}> Lor ipsum duet</p>
            <div className="VenueContainer">
                <img src={VenuePicture} alt="Venue" className="VenueImage" />
            </div>
        </div>
    );
  }
  
  
export default Bio;