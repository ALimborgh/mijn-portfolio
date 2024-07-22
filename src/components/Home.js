// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/ProjectsData';

const Home = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  const projectsToDisplay = projectsData.slice(0, 2);

  return (
    <main>
      <section className="hero">
        <h2>Welkom op mijn persoonlijke pagina</h2>
        <p>Hallo, ik ben Adriaen Limborgh, een gepassioneerde fullstack developer met een talent voor het oplossen van complexe problemen. Ontdek mijn projecten, leer meer over mij of neem contact met mij op!</p>
        <Link className="link" to="projects" onClick={scrollToTop}>Bekijk mijn projecten</Link>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        {projectsToDisplay.map(project => (
          <div className="card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              Voor meer informatie<Link className="link" to={`/projects/${project.id}`} onClick={scrollToTop}> click hier.</Link>
            </p>
          </div>
        ))}
      </section>

      <section className="about-me">
        <h2>Over mij</h2>
        <p>Ik ben een enthousiaste professional met een passie voor technologie en probleemoplossing.<Link className="link" to="about" onClick={scrollToTop}> Lees meer over mij</Link>
        </p>
      </section>

      <section className="resume">
        <h2>Bekijk Mijn CV</h2>
        <p>Benieuwd naar mijn ervaring en vaardigheden?<Link className="link" to="resume" onClick={scrollToTop}> Bekijk mijn CV</Link> voor meer informatie.
        </p>
      </section>
    </main>
  );
}

export default Home;
