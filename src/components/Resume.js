// src/components/Resume.js
import React from 'react';
import '../assets/css/Resume.css';

const Resume = () => {
  return (
    <main>
      <section>
        <h2>Contact Information</h2>
        <p>
          Adriaen Limborgh<br />
          Adres: Luifelstraat 126, 6041 EK Roermond<br />
          Tel: +31 622 620 054<br />
          E-mail: <a href="mailto:Adriaen95@hotmail.com">Adriaen95@hotmail.com</a>
        </p>
      </section>

      <section>
        <h2>Profile</h2>
        <p>Enthousiaste en leergierige professional met een passie voor het oplossen van complexe problemen. Klaar voor een nieuwe uitdaging om mijn vaardigheden verder te ontwikkelen en bij te dragen aan een dynamische werkomgeving.</p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <h3>McDonald's - Crewtrainer</h3>
        <p>November 2011 – heden</p>
        <ul>
          <li>Trainen en begeleiden van nieuwe en bestaande teamleden.</li>
          <li>Verantwoordelijk voor voorraadbeheer en productopslag.</li>
          <li>Toezicht houden op de kwaliteitscontrole van voedselbereiding en klantenservice.</li>
        </ul>

        <h3>Studiebende - Bijlesdocent</h3>
        <p>Augustus 2016 – heden</p>
        <ul>
          <li>Geven van bijlessen in exacte vakken aan middelbare scholieren.</li>
          <li>Coachen en begeleiden van leerlingen bij hun studie en huiswerk.</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <h3>Lyceum Schöndeln - HAVO Diploma</h3>
        <p>Juli 2012</p>
        <ul>
          <li>Havodiploma behaald met uitstekende resultaten.</li>
          <li>Actief vrijwilligerswerk gedaan voor het vak CKV.</li>
        </ul>

        <h3>Hogeschool van Arnhem en Nijmegen - Propedeuse Lerarenopleiding Wiskunde</h3>
        <p>Juli 2020</p>
        <ul>
          <li>Propedeuse behaald met uitstekende resultaten.</li>
        </ul>

        <h3>Winc Academy - Fullstack Developer</h3>
        <p>Juli 2024</p>
        <ul>
          <li>Vaardigheden ontwikkeld in HTML, CSS, JavaScript, React, Git en Python.</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Gevorderde kennis van Microsoft Office.</li>
          <li>Vaardigheid in het vereenvoudigen van complexe concepten.</li>
          <li>Uitstekende luister- en communicatievaardigheden.</li>
          <li>Sterke teamspeler met een ondersteunende houding.</li>
          <li>Ervaring met data-analyse.</li>
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          <li>Nederlands: moedertaal</li>
          <li>Duits: moedertaal</li>
          <li>Engels: vloeiend</li>
        </ul>
      </section>

      <section>
        <h2>Volunteer Work</h2>
        <h3>Hockeyclub Concordia - Hockeytrainer</h3>
        <ul>
          <li>Trainer van jeugdteams, waarbij ik vaardigheden en teamwork bevorder.</li>
        </ul>
      </section>
    </main>
  );
}

export default Resume;
