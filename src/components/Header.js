// src/components/Header.js
import React, { useState } from 'react';
import '../assets/css/Header.css';
import TriforceSVG from './TriforceSVG';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [name, setName] = useState('Adriaen Limborgh');
  const [showTriforce, setShowTriforce] = useState(false);

  const handleClick = () => {
    setShowTriforce(!showTriforce);
  
    if (!showTriforce) {
      // If showTriforce is currently false, change it to true and set the name to TriforceSVG
      setName(<TriforceSVG />);
      // Set a timeout to revert the name back to 'Adriaen Limborgh' after 3 seconds (3000 milliseconds)
      setTimeout(() => {
        setName('Adriaen Limborgh');
        setShowTriforce(false); // Ensure showTriforce is set back to false
      }, 3000);
    }
  };

  return (
    <header>
      <h1 onClick={handleClick}>{name}</h1>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
