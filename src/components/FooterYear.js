import { useEffect } from 'react';

const FooterYear = () => {
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = `Adriaen Limborgh © ${currentYear}`;
    }
  }, []);

  return null;
};

export default FooterYear;
