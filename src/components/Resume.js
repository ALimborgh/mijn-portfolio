// src/components/Resume.js
import React from 'react';
import '../assets/css/Resume.css';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <main>
      <section>
        <h2>Profile</h2>
        <p>Ik ben een gedreven expert met een passie voor het aanpakken van uitdagende problemen. Mijn leergierigheid motiveert me om voortdurend
          nieuwe vaardigheden te verwerven en te verbeteren. Ik sta open voor een nieuwe uitdaging waarin ik mijn kennis kan vergroten en
          een waardevolle rol kan spelen in een dynamische en innovatieve werkomgeving. Ik geloof sterk in de kracht van samenwerking en
          communicatie, en ik streef ernaar om altijd een positieve bijdrage te leveren aan het team. Mijn analytische benadering helpt me om complexe
          vraagstukken te doorgronden en oplossingen te vinden die zowel efficiënt als effectief zijn. Daarnaast ben ik flexibel en pas ik me
          gemakkelijk aan veranderende omstandigheden aan, wat me in staat stelt om onder druk te presteren en deadlines te halen. In mijn vorige
          functies heb ik aangetoond dat ik niet alleen technisch bekwaam ben, maar ook een betrouwbare en inspirerende collega. Ik kijk
          ernaar uit om mijn expertise in te zetten en verder te ontwikkelen binnen een organisatie die innovatie en groei waardeert.
        </p>
        <p>Wil je mij contacteren <Link to="/Contact"> klik dan hier</Link> en vul het contact formulier in.</p>
      </section>

      <section>
        <h2>Education</h2>
        <h3>Winc Academy - Fullstack Developer</h3>
        <p>Juli 2024</p>
        <ul>
          <li>Een gevarieerde set vaardigheden verworven, variërend van HTML, CSS, JavaScript, React, Git, Python, Flask, Database Expertise, PeeWee, Wireframing, Toegankelijkheid, Webdesign en Coderingsvaardigheden.</li>
        </ul>

        <h3>Hogeschool van Arnhem en Nijmegen - Propedeuse Lerarenopleiding Wiskunde</h3>
        <p>Juli 2020</p>
        <ul>
          <li>Propedeuse behaald met uitstekende resultaten.</li>
        </ul>

        <h3>Lyceum Schöndeln - HAVO Diploma</h3>
        <p>Juli 2012</p>
        <ul>
          <li>Havodiploma behaald met uitstekende resultaten.</li>
          <li>Actief vrijwilligerswerk gedaan voor het vak CKV.</li>
        </ul>
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

      <section>
        <h2>Belangrijkste interesses</h2>
        <ul>
          <li>Gamen: Het ontwikkelen van strategisch inzicht en probleemoplossend
          vermogen.</li>
          <li>Hockey: Het versterken van teamgeest en fysieke fitheid.</li>
          <li>Dungeons & Dragons (D&D): Het bevorderen van creativiteit en
          samenwerking door middel van rollenspel.</li>
          <li>Schaken: Het verbeteren van strategisch denken en concentratie.</li>
          <li>Films en series: De analyse van verhaallijnen en karakterontwikkeling,
          alsmede ontspanning.</li>
        </ul>
      </section>
    </main>
  );
}

export default Resume;
