import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* CHAP QISM: MATNLAR VA TUGMA */}
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

        {/* O'NG QISM: 3D PERSONAJ VA DOIRA */}
        <div className="hero-image-container">
          {/* ORQA FONDA GI MOVY DOIRA VA ICONS */}
          <div className="circle-wrapper">
            <span className="skill-badge badge-code">&lt;/&gt;</span>
            <span className="skill-badge badge-ui">UI</span>
            <span className="skill-badge badge-ux">UX</span>
            <span className="skill-badge badge-ps">PS</span>
          </div>

          {/* PERSONAJ RASMI */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
            alt="Gleb Kostrubov" 
            className="hero-avatar"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;