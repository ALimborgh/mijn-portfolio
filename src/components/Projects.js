import React, { useState, useCallback } from 'react';
import '../assets/css/Projects.css';
import projectsData from '../data/ProjectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]); // Meerdere afbeeldingen in modal

  const handleImageClick = useCallback((imagePaths) => {
    setCurrentImages(imagePaths);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
                  navigation= {true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  {project.imagePaths.map((path, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <img
                        src={path}
                        alt={`${index + 1}`}
                        onClick={() => handleImageClick(project.imagePaths)}
                        style={{ cursor: 'pointer' }}
                      />
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
      <ImageModal isOpen={isModalOpen} images={currentImages} onClose={handleCloseModal} />
    </main>
  );
};

const ImageModal = React.memo(({ isOpen, images, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation= {true}	
          modules={[Pagination, Navigation]}
          className="swiper-modal"
        >
          {images.map((path, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={path} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
});

export default Projects;
