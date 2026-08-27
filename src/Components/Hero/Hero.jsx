import React from 'react';
import './Hero.css';
import  IMG from "./Images/Hero.png"

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content">
          <span className="hero-greeting">HELLO</span>
          <h1 className="hero-name">
            I'M GLEB<br />KOSTRUBOV
          </h1>
          <p className="hero-description">
            I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me
          </p>
          <a href="#contact" className="btn-contact-me">
            CONTACT ME
          </a>
        </div>

        <div className="hero-image-container">
          <div className="circle-wrapper">
            <span className="skill-badge badge-code">&lt;/&gt;</span>
            <span className="skill-badge badge-ui">UI</span>
            <span className="skill-badge badge-ux">UX</span>
            <span className="skill-badge badge-ps">PS</span>
          </div>

          <img 
            src={IMG} 
            alt="Gleb Kostrubov" 
            className="hero-avatar"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;