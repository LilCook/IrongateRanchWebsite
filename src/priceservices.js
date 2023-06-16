import React from 'react';
import './priceservices.css';

function PriceServices(){
  return (
    <div className='sidiv'>
      <h1 className='siclass'>Services/Prices</h1>
      <h2>Description of Services</h2>
     <p>Basic Lawn Cut-This entails a standard lawn cut that encompasses the entirety of your yard.</p>
     <p>Edging-This consists of using a weed whacker in order to trim certain portions of a yard that may be unreachable with the mower</p>
     <p>Bagging-This consists of putting the bag on the back of the mower so that the lawn clippings are picked up and not strewn across the lawn.</p>
     <h2>Prices</h2>
     <p>Basic Lawn Cut-$25</p>
     <p>Edging-$5</p>
     <p>Bagging-$10</p>
     <p>If you like our services and want to schedule an appointment, please click the "Sign Up Now" button in the upper-left hand corner
      to access our client portal. We'll try to respond as soon as we can!
     </p>
    </div>
  );
}

export default PriceServices
