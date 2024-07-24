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
    }
  ];
  
  export default projectsData;