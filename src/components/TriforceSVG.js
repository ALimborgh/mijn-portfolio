import React from 'react';
import '../assets/css/TriforceSVG.css';

const TriforceSVG = () => (
  <svg
    className="triforce-svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon className="triforce-triangle" points="50,20 30,60 70,60" /> {/* Top Triangle */}
    <polygon className="triforce-triangle" points="30,60 5,110 55,110" /> {/* Bottom Left Triangle */}
    <polygon className="triforce-triangle" points="70,60 45,110 95,110" /> {/* Bottom Right Triangle */}
  </svg>
);

export default TriforceSVG;