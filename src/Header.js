import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='Heading'>
            <h1 style={{display:'inline-block', marginLeft:'40px'}}>
                <a href='/home' className='headlink'>
                Irongate Ranch
                </a>
            </h1>
            <p className="hover-effect" style={{display:'inline-block', marginLeft:'500px'}}>
                <a href='/book-a-wedding' className='headlink'>Book an Event</a>
            </p>
            <p className="hover-effect" style={{display:'inline-block', marginLeft:'100px'}}> 
                <a href='/faqs' className='headlink'>FAQs</a>
            </p>
            <p className="hover-effect"style={{display:'inline-block', marginLeft:'100px'}}>
                <a href='/' className='headlink'>About the Venue</a>
            </p>
            <p className="hover-effect"style={{display:'inline-block', marginLeft:'100px'}}>
                <a href='/' className='headlink'>Testimonials</a>
            </p>
            <p className="hover-effect"style={{display:'inline-block', marginLeft:'100px'}}>
                <a href='/about-us' className='headlink'>About Us</a>
            </p>
        </div>
        
        
    );

}


export default Header;
