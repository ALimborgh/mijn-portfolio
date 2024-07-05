// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about">
          <h3>Over Mij</h3>
          <p>Welkom op mijn website! Ik ben een Fullstack Developer met een passie voor het oplossen van complexe problemen.</p>
          <Link to="/about" className="footer-link">Lees meer</Link>
        </div>
        <div className="footer-links">
          <h3>Snelkoppelingen</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Over mij</Link></li>
            <li><Link to="/projects">Projecten</Link></li>
            <li><Link to="/resume">CV</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Volg Mij</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/ALimborgh" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/github-6980894_1280.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p><span id="year"></span> Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}

export default Footer;
