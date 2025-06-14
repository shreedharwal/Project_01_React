import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">TrackNest</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><a href="#home" className={activeLink === "#home" ? "active" : ""} onClick={() => handleLinkClick("#home")}>Home</a></li>
        <li><a href="#features" className={activeLink === "#features" ? "active" : ""} onClick={() => handleLinkClick("#features")}>Features</a></li>
        <li><a href="#about" className={activeLink === "#about" ? "active" : ""} onClick={() => handleLinkClick("#about")}>Dashboard</a></li>
        <li><a href="#contact" className={activeLink === "#contact" ? "active" : ""} onClick={() => handleLinkClick("#contact")}>Contact</a></li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
