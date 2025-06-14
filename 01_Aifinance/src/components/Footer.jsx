import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>TrackNest</h1>
        <p>Empowering Your Financial Future with AI</p>
        <nav className="footer-nav">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#contact">Contact Us</a>
          <p>© {new Date().getFullYear()} TrackNest. All rights reserved.</p>

        </nav>
      </div>
    </footer>
  );
};

export default Footer;