import React from 'react';
import '../../App';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
  <>
    <div className='hero-container'>
          
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Win The Best!</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Apply Now
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
        
    </div>
  </>
    
    
  );
}

export default HeroSection;
