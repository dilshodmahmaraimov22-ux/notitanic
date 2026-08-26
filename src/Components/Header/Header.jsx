import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* LOGO */}
        <a href="#home" className="header-logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="#00eeff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 19 22 19 12 2"></polygon>
            <polyline points="2 19 12 13 22 19"></polyline>
          </svg>
          <span className="logo-text">notitanic</span>
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="header-nav">
          <ul>
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About me</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;