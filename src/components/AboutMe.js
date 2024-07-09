// src/components/AboutMe.js
import React from 'react';
import '../assets/css/AboutMe.css';

const AboutMe = () => {
  return (
    <main>
      <section id="about">
        <div className="about-content">
          <img src="" alt="Adriaen Limborgh" className="profile-img" />
          <div className="about-text">
            <h2>Over mij</h2>
            <p>
              Hallo! Ik ben Adriaen Limborgh, een gepassioneerde Full Stack Developer met een talent voor het maken van innovatieve webapplicaties. Ik word gedreven door de uitdaging om complexe problemen op te lossen en voortdurend nieuwe technologieën te leren.
            </p>
            <p>
              Mijn reis begon met een grote interesse in technologie, wat ertoe leidde dat ik een carrière als ontwikkelaar nastreefde. Door de jaren heen heb ik mijn vaardigheden aangescherpt door middel van verschillende projecten, trainingen en professionele ervaringen.
            </p>
            <p>
              Ik ben gespecialiseerd in zowel frontend- als backend-ontwikkeling, met expertise in HTML, CSS, JavaScript, React en Python. Ik wil altijd graag nieuwe uitdagingen aangaan en bijdragen aan spannende projecten.
            </p>
            <p>
              Verken gerust mijn <a href="/projects">projecten</a> om te zien waar ik aan heb gewerkt, of neem contact op via het <a href="/contact">contact</a> pagina. Ik kijk ernaar uit om met je in contact te komen!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
