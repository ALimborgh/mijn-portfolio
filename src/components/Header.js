// src/components/Header.js
import React from 'react';
import './assets/css/Header.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header>
      <h1>Adriaen Limborgh</h1>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
