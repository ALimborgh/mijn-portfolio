// src/components/Projects.js
import React from 'react';
import '../assets/css/Projects.css';
import projectsData from '../data/ProjectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Updated import for Swiper styles
import 'swiper/css/pagination'; // Import styles for Pagination
import 'swiper/css/navigation'; // Import styles for Navigation
import { Pagination, Navigation } from 'swiper/modules'; // Updated import for modules

const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      {projectsData.map((project) => (
        <div key={project.id} className="project">
 
          <div className="project-content">
            <h2>{project.title}</h2>       
            <div className="project-image">
            {project.imagePaths ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                className="swiper"
              >
                {project.imagePaths.map((path, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <img src={path} alt={`Afbeelding van ${project.title} ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>Geen afbeeldingen beschikbaar</p>
            )}
          </div>
            <h4>Omschrijving:</h4>
            <p>{project.description}</p>
            <h4>Technologieën:</h4>
            <div className="technologies">
              {project.technologies?.map((tech, index) => (
                <p key={index}>{tech}</p>
              )) || 'Geen technologieën vermeld'}
            </div>
            <h4>Toepassingen:</h4>
            <div className="toepassingen">
              {project.Toepassingen?.map((app, index) => (
                <p key={index}>{app}</p>
              )) || 'Geen toepassingen vermeld'}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Bekijk de code voor dit project</a>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Projects;
