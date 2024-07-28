// src/data/projectsData.js
import basicReactProject from '../assets/images/Basic React Project.png';
import basicReactProject2 from '../assets/images/Basic React Project 2.png';
import advancedReactProject from '../assets/images/Advanced React Project.png';
import advancedReactProject2 from '../assets/images/Advanced React Project 2.png';
import advancedReactProject3 from '../assets/images/Advanced React Project 3.png';
import advancedReactProject4 from '../assets/images/Advanced React Project 4.png';
import advancedReactProject5 from '../assets/images/Advanced React Project 5.png';
import cliProject from '../assets/images/CLI Project.png';
import webshopProject from '../assets/images/BetsyWebshop Project.png';
import webshopProject2 from '../assets/images/BetsyWebshop Project 2.png';
import webshopProject3 from '../assets/images/BetsyWebshop Project 3.png';
import webshopProject4 from '../assets/images/BetsyWebshop Project 4.png';
import webshopProject5 from '../assets/images/BetsyWebshop Project 5.png';
import CICDProject from '../assets/images/CI,CD Project.png';
import CICDProject2 from '../assets/images/CI,CD Project 2.png';
import CICDProject3 from '../assets/images/CI,CD Project 3.png';
import CICDProject4 from '../assets/images/CI,CD Project 4.png';
import CICDProject5 from '../assets/images/CI,CD Project 5.png';
import CICDProject6 from '../assets/images/CI,CD Project 6.png';
import PortfolioWebsite from '../assets/images/Portfolio Website.png';

const projectsData = [
    {
      id: 1,
      title: 'Basic React Project (Schoolopdracht)',
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
      title: 'Advanced React Project (Schoolopdracht)',
      description: 'Deze React-applicatie is een uitgebreid evenementenbeheersysteem waarmee gebruikers evenementen kunnen bekijken, zoeken, filteren en toevoegen. Gebruikers kunnen een lijst met evenementen zien, inclusief details zoals titel, afbeelding, beschrijving, locatie, begintijd en eindtijd. Via een zoekfunctie kunnen ze evenementen vinden op basis van trefwoorden en filteren op categorieën zoals locatie of tijd. Nieuwe evenementen kunnen eenvoudig worden toegevoegd via een modaal formulier, waarin alle relevante informatie en categorieën worden ingevoerd. De applicatie maakt gebruik van Chakra UI voor een moderne gebruikersinterface en react-router-dom voor naadloze navigatie, met dynamische gegevensopslag en -ophaling van een backend-server voor een interactieve ervaring.',
      Toepassingen: ['Bedrijfsgebruik', 'Onderwijsinstellingen', 'Gemeenschapsorganisaties', 'Culturele en Recreatieve Gebeurtenissen', 'Persoonlijk Gebruik', 'Commerciële Evenementen'],
      technologies: ['React', 'Chakra UI', 'react-router-dom', 'Fetch API', 'JSON', 'JavaScript ES6', 'async/await', 'useState', 'useEffect', 'useDisclosure', 'useToast'],
      imagePaths: [
        advancedReactProject, 
        advancedReactProject2,
        advancedReactProject3,
        advancedReactProject4,
        advancedReactProject5
    ],
      link: 'https://github.com/ALimborgh/React-Advanced-Project',
    },
    {
      id: 3,
      title: 'CLI Project (Schoolopdracht)',
      description: "Deze code vormt een command-line interface (CLI) voor een supermarktbeheersysteem genaamd 'superpy'. Het gebruikt argparse om verschillende subcommando's te parseren en verwerken zoals buy, sell, list, forward, backward, profit, revenue en reset_date. Gebruikers kunnen producten kopen of verkopen, een lijst van producten bekijken, de tijd vooruit of achteruit reizen om bijvoorbeeld verlopen producten te verwijderen, en de winst of omzet op een bepaalde datum berekenen. De TimeMachine-klasse beheert de datum en tijd, terwijl functies zoals buy_product en sell_product producten toevoegen aan of verwijderen uit CSV-bestanden. Visuele feedback wordt gegeven met behulp van de rich bibliotheek.",
      Toepassingen: ['Voorraadbeheer', 'Winst- en omzetberekening', 'Vervaldatumanagement', 'Datumbeheer', 'Geautomatiseerde rapportage en analyses', 'Gebruik in trainingsomgevingen'],
      technologies: ['Python', 'CLI', 'argparse', 'rich', 'datetime', 'CSV', 'OOP', 'unittest', 'Pytest', 'timedelta', 'time', 'os', 'rich.console', 'rich.table', 'rich.progress'],
      imagePaths: [cliProject],
      link: 'https://github.com/ALimborgh/SuperPy',
    },
    {
      id: 4,
      title: 'Webshop Project (Schoolopdracht)',
      description: "De code definieert een webwinkeltoepassing met behulp van de Peewee ORM en SQLite. Het bevat modellen voor gebruikers, producten, tags, product-tags-relaties en transacties. Gebruikers kunnen producten bezitten en beheren, waarbij producten een naam, beschrijving, prijs, hoeveelheid in voorraad en een actieve status hebben. Tags kunnen aan producten worden gekoppeld om ze te categoriseren. Transacties houden bij wanneer gebruikers producten kopen, inclusief de hoeveelheid en totale prijs. Daarnaast zijn er functies om producten te zoeken op naam of beschrijving, producten van een specifieke gebruiker op te sommen, producten per tag op te sommen, producten toe te voegen aan de catalogus van een gebruiker, producten van een gebruiker te verwijderen, de voorraad van een product bij te werken, en een product te kopen waarbij een transactie wordt geregistreerd. Er is ook een functie om de database te vullen met voorbeeldgegevens, waaronder het aanmaken van gebruikers, producten, tags en transacties. Logging wordt gebruikt om informatie en fouten bij te houden.",
      Toepassingen: ['E-commerce', 'Productbeheer', 'Gebruikersbeheer', 'Transactiebeheer', 'Voorraadbeheer', 'Gegevensanalyse', 'Gebruik in trainingsomgevingen', 'Productzoekopdrachten', 'Gebruikersspecifiek productbeheer', 'Productcategorisatie en -tagging', 'Voorraadbeheer', 'Productverwijdering', 'Voorraadaanpassing', 'Transactiebeheer en aankoopregistratie', 'Database-initialisatie en -populatie', 'Foutlogging en informatiebeheer'],
      technologies: ['Peewee ORM', 'SQLite', 'Python', 'Logging', 'SQL'],
      imagePaths: [webshopProject, webshopProject2, webshopProject3, webshopProject4, webshopProject5],
      link: 'https://github.com/ALimborgh/Betsy-Webshop',
    },
    {
      id: 5,
      title: 'CI/CD Project (Schoolopdracht)',
      description: "De GitHub Actions workflow Test and Deploy automatiseert het test- en uitrolproces voor een Python-project. De workflow bestaat uit verschillende jobs die op elkaar volgen. De eerste job voert tests uit op een Ubuntu-omgeving door de code uit te checken, Python 3.8 in te stellen, afhankelijkheden te installeren en tests te draaien met pytest. Na succesvolle tests wordt de tweede job uitgevoerd, die de omgeving voorbereidt voor uitrol door een SSH-sleutel te installeren en toe te voegen aan de bekende hosts. De derde job kopieert bestanden naar de server met rsync en zorgt ervoor dat de server toegankelijk is via SSH. De vierde job voert de daadwerkelijke uitrol uit op de server, waarbij de applicatie wordt geïnstalleerd en herstart. Ten slotte genereert de vijfde job een statusrapport door de status van de applicatie en recente logs op de server te controleren en te rapporteren. Elke job is afhankelijk van de voltooiing van de voorgaande jobs, wat zorgt voor een gestructureerde en ordelijke uitrol.",
      Toepassingen: ['Code testen', 'Python afhankelijkheden installeren', 'Tests uitvoeren met pytest', 'SSH-toegang instellen', 'Bestanden naar server kopiëren', 'Applicatie op server installeren', 'Applicatie herstarten', 'Statusrapporten genereren', 'Server logs controleren', 'Deployment automatiseren', 'Configuratiebeheer', 'Omgevingsinstellingen controleren', 'Deployment opvolging en verificatie', 'Testresultaten analyseren', 'Serverstatus monitoren'],
      technologies: ['GitHub Actions', 'Python', 'pytest', 'rsync', 'SSH', 'Ubuntu', 'CI/CD', 'Deployment', 'Testen', 'Logging', 'Statusrapportage', 'Configuratiebeheer', 'actions/checkout@v2', 'actions/setup-python@v2', 'webfactory/ssh-agent@v0.5.3','systemctl', 'journalctl'],
      imagePaths: [CICDProject, CICDProject2, CICDProject3, CICDProject4, CICDProject5, CICDProject6],
      link: 'https://github.com/ALimborgh/CD',
    },
    {
      id: 6,
      title: 'Mijn Portfolio Website',
      description: `Deze website dient als mijn persoonlijke portfolio waar ik mijn projecten, vaardigheden, en professionele ervaring presenteer. 
      De site is zorgvuldig ontworpen en ontwikkeld met behulp van moderne webtechnologieën om een gebruiksvriendelijke en visueel aantrekkelijke ervaring te bieden. 
      Het doel van de website is om mijn werk te tonen en een uitgebreid overzicht te geven van mijn capaciteiten aan potentiële werkgevers, klanten, en andere geïnteresseerden.
      
      De website is opgebouwd met React, een populaire JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces. React stelt me in staat om component-gebaseerde architectuur te gebruiken, waardoor de website modulair, herbruikbaar en gemakkelijk te onderhouden is. 
      Chakra UI, een krachtige en toegankelijke componentbibliotheek voor React, wordt gebruikt voor het stylen van de website. Dit zorgt voor een moderne, consistente en responsieve gebruikersinterface die goed werkt op verschillende apparaten en schermformaten.
      `,
      Toepassingen: [
          'Portfolio en CV presentatie', 
          'Project showcase', 
          'Navigatie en routing', 
          'Responsief ontwerp', 
          'Contact'
      ],
      technologies: ['React', 'Chakra UI', 'JavaScript', 'React-router', 'CSS'],
      imagePaths: [PortfolioWebsite],
      link: 'https://github.com/ALimborgh/Portfolio-Website',
  }
  ];
  
  export default projectsData;