// src/data/projectsData.js
import basicReactProject from '../assets/images/Basic React Project.png';
import basicReactProject2 from '../assets/images/Basic React Project 2.png';

const projectsData = [
    {
      id: 1,
      title: 'Basic React Project',
      description: 'Dit project is een essentiële React-component binnen een kookwebsite of -applicatie die is ontworpen om gedetailleerde informatie over een specifiek recept te tonen. Deze component fungeert als de centrale weergavepagina voor gebruikers die meer willen weten over een recept, inclusief ingrediënten, bereidingsinstructies, voedingswaarde en andere relevante gegevens. Ook is het mogelijk om op een van de recepten te klikken om de details van dat recept te bekijken. Verder is er een zoekfunctie toegevoegd om gemakkelijk tussen de verschillende recepten te kunnen zoeken.',
      Toepassingen:['Kookwebsites', 'Dieet- en gezondheidsapps', 'E-learning platforms', 'Persoonlijke receptenbeheer', 'Voedselblogs'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'React-router', 'Chakra UI'],
      imagePaths: [
        basicReactProject, 
        basicReactProject2
    ],
      link: 'https://github.com/ALimborgh/React-Basic-Project',
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