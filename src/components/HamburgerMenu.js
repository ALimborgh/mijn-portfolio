// src/components/HamburgerMenu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = (event) => {
    setMenuVisible(!menuVisible);
    event.stopPropagation();
  };

  const closeMenu = (event) => {
    if (!event.target.closest('#navMenu') && window.innerWidth <= 768) {
      setMenuVisible(false);
    }
  };

  const handleLinkClick = () => {
    setMenuVisible(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <>
      <button className={`hamburger-menu__button ${menuVisible ? 'hide' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">☰</button>
      <nav id="navMenu" className={`hamburger-menu__nav ${menuVisible ? 'hamburger-menu__nav--show' : ''}`}>
        <ul className="hamburger-menu__list">
          <li className="hamburger-menu__item"><Link to="/" onClick={handleLinkClick} className="hamburger-menu__link">Home</Link></li>
          <li className="hamburger-menu__item"><Link to="/about" onClick={handleLinkClick} className="hamburger-menu__link">Over Mij</Link></li>
          <li className="hamburger-menu__item"><Link to="/projects" onClick={handleLinkClick} className="hamburger-menu__link">Projecten</Link></li>
          <li className="hamburger-menu__item"><Link to="/resume" onClick={handleLinkClick} className="hamburger-menu__link">CV</Link></li>
          <li className="hamburger-menu__item"><Link to="/contact" onClick={handleLinkClick} className="hamburger-menu__link">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;