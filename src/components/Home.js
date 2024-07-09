// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // For smooth scrolling
      });
    };

  return (
    <main>
      <section className="hero">
        <h2>Welkom op mijn persoonlijke pagina</h2>
        <p>Hallo, ik ben Adriaen Limborgh, een gepassioneerde fullstack developer met een talent voor het oplossen van complexe problemen. Ontdek mijn projecten, leer meer over mij of neem contact met mij op!</p>
        <Link to="projects" duration={500} onClick={scrollToTop}>Bekijk mijn projecten</Link>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="card">
          <h3><a href="/projects#project1">Project 1</a></h3>
          <p>Een korte omschrijving van Project 1.</p>
        </div>
        <div className="card">
          <h3><a href="/projects#project2">Project 2</a></h3>
          <p>Een korte omschrijving van Project 2.</p>
        </div>
      </section>

      <section className="about-me">
        <h2>Over mij</h2>
        <p>Ik ben een enthousiaste professional met een passie voor technologie en probleemoplossing. <Link to="about" duration={500} onClick={scrollToTop}>Lees meer over mij</Link></p>
      </section>

      <section className="resume">
        <h2>Bekijk Mijn CV</h2>
        <p>Benieuwd naar mijn ervaring en vaardigheden? <Link to="resume" duration={500} onClick={scrollToTop}>Bekijk mijn CV</Link> voor meer informatie.</p>
      </section>
    </main>
  );
}

export default Home;
