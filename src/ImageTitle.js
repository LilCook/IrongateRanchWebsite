import React from 'react';
import './Title.css';
import backgroundImage from './outdoor-wedding-venue.jpg';

function Title() {
  return (
    <div className='Image' style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className='Text'>
        <h2>Irongate Ranch</h2>
        <button className='Button'>
          <a href='/book-a-wedding' className='imagelink'>Book your stay</a>
        </button>
        
      </div>
    </div>
  );
}

export default Title;


{/*
const images = [
  require('./outdoor-wedding-venue.jpg'),
  require('./cabinvenue.jpg'),
  // Add more image URLs as needed
];

function Title() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='Image' style={{ backgroundImage: `url(${images[currentImageIndex.default]})` }}>
      <div className='Text'>
        <h2>Bassett Wedding Venue</h2>
        <button className='Button'>
          <a href='https://www.google.com/' className='imagelink'>Book your stay</a>
        </button>
      </div>
    </div>
  );
}

export default Title;
*/}

