import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about">
          <h3>Over Mij</h3>
          <p>Welkom op mijn website! Ik ben een Fullstack Developer met een passie voor het oplossen van complexe problemen.</p>
          <Link 
            to="about"
            className="footer-link"
            duration={500}
            onClick={scrollToTop} // Add onClick event handler
          >
            Lees meer
          </Link>
        </div>
        <div className="footer-links">
          <h3>Snelkoppelingen</h3>
          <ul>
            <li><Link to="/"  duration={500} onClick={scrollToTop}>Home</Link></li>
            <li><Link to="about" duration={500} onClick={scrollToTop}>Over mij</Link></li>
            <li><Link to="projects" duration={500} onClick={scrollToTop}>Projecten</Link></li>
            <li><Link to="resume" duration={500} onClick={scrollToTop}>CV</Link></li>
            <li><Link to="contact" duration={500} onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Volg Mij</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/ALimborgh" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/github-6980894_1280.png" alt="GitHub" />
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
