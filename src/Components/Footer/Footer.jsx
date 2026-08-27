import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-col">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col contact-info">
          <p className="contact-title">Contact:</p>
          <p>Email: <a href="mailto:notitanic33@gmail.com">notitanic33@gmail.com</a></p>
          <p>Inst: <a href="https://instagram.com" target="_blank" rel="noreferrer">notitanic33</a></p>
          <p>Calls: <a href="tel:+79001215454">+7 (900) - 121 - 54 -54</a></p>
        </div>

        <div className="footer-col logo-col">
          <div className="footer-logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="#00eeff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 19 22 19 12 2"></polygon>
              <polyline points="2 19 12 13 22 19"></polyline>
            </svg>
            <span className="logo-text">notitanic</span>
          </div>
          <p className="copyright-text">Copyright &copy; 2021, Notitanic</p>
        </div>

        <button onClick={scrollToTop} className="btn-scroll-top" aria-label="Scroll to top">
          &#8593;
        </button>

      </div>
    </footer>
  );
}

export default Footer;