// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>Adriaen Limborgh</h1>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">☰</button>
      <nav>
        <ul id="navMenu" className={menuOpen ? 'show' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Over Mij</Link></li>
          <li><Link to="/projects">Projecten</Link></li>
          <li><Link to="/resume">CV</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
