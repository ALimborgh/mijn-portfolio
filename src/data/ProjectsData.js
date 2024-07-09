// src/data/projectsData.js
import basicReactProject from '../assets/images/Basic React Project.png';

const projectsData = [
    {
      id: 1,
      title: 'Basic React Project',
      description: 'De Basic React Project is een React-project die wordt gebruikt om gedetailleerde informatie over een specifiek recept weer te geven op een kookwebsite of -app.',
      Toepassingen:['Kookwebsites', 'Dieet- en gezondheidsapps', 'E-learning platforms', 'Persoonlijke receptenbeheer', 'Voedselblogs'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Reactrouter', 'Chakra UI'],
      imagePaths: basicReactProject,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2. This project showcases backend development with Python and Django.',
      technologies: ['Python', 'Django'],
    },
    // Add more projects as needed
  ];
  
  export default projectsData;