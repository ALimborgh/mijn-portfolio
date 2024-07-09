import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active styling

const HamburgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuVisible(prevState => !prevState);
  }, []);

  const closeMenu = useCallback((event) => {
    if (!event.target.closest('#navMenu') && window.innerWidth <= 768) {
      setMenuVisible(false);
    }
  }, []);

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
  }, [closeMenu]);

  return (
    <>
      <button className={`hamburger ${menuVisible ? 'hide' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={menuVisible}>
        <span className="hamburger-icon">☰</span>
      </button>
      <nav id="navMenu" className={menuVisible ? 'visible' : 'hidden'}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Over Mij</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projecten</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>CV</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;