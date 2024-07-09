// src/components/Projects.js
import React from 'react';
import '../assets/css/Projects.css';
import projectsData from '../data/ProjectsData';

const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      {projectsData.map((project) => (
        <div key={project.id} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
          {project.Toepassingen && (
            <p>Toepassingen: {project.Toepassingen.join(', ')}</p>
          )}
          <img src={project.imagePaths} alt={project.title} />
        </div>
      ))}
    </main>
  );
}

export default Projects;