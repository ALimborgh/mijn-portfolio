import { useEffect } from 'react';
import '../assets/css/FooterYear.css';

const FooterYear = () => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {  
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = `Adriaen Limborgh © ${currentYear}`;
    }
  }, [currentYear]);

  return (
    <div id="year">Adriaen Limborgh © {currentYear} </div>
  );
};

export default FooterYear;
