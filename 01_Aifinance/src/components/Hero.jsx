import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to <span>TrackNest</span></h1>
        <p>Your ultimate productivity and task tracking hub—smart, sleek, and simple.</p>
        <a href="#features" className="hero-btn">Explore Features</a>
      </div>
    </section>
  );
};

export default Hero;