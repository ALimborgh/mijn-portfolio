import React, { useState, useCallback } from 'react';
import projectsData from '../data/ProjectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button
} from '@chakra-ui/react';

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImages, setCurrentImages] = useState([]);

  const handleImageClick = useCallback((imagePaths) => {
    setCurrentImages(imagePaths);
    onOpen();
  }, [onOpen]);

  return (
    <Box as="main" p={5} bg="orange.50">
      <Heading as="h1" size="xl" mb={5} color="orange.900">Projecten</Heading>
      {projectsData.map((project) => (
        <Box key={project.id} mb={10} p={5} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="md">
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="lg" color="orange.800">{project.title}</Heading>
            <Box w="full">
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
                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src={path}
                        alt={`${index + 1}`}
                        cursor="pointer"
                        onClick={() => handleImageClick(project.imagePaths)}
                        borderRadius="md"
                        maxW={{ base: '100%', md: '600px' }} // Responsive max width
                        maxH={{ base: '200px', md: '400px' }} // Responsive max height
                        objectFit="cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Text color="gray.500">Geen afbeeldingen beschikbaar</Text>
              )}
            </Box>
            <Heading as="h4" size="md" color="orange.700">Omschrijving:</Heading>
            <Text color="gray.700">{project.description}</Text>
            <Heading as="h4" size="md" color="orange.700">Technologieën:</Heading>
            <HStack wrap="wrap" spacing={2}>
              {project.technologies?.map((tech, index) => (
                <Text key={index} bg="orange.100" p={1} borderRadius="md">{tech}</Text>
              )) || <Text color="gray.500">Geen technologieën vermeld</Text>}
            </HStack>
            <Heading as="h4" size="md" color="orange.700">Toepassingen:</Heading>
            <HStack wrap="wrap" spacing={2}>
              {project.Toepassingen?.map((app, index) => (
                <Text key={index} bg="orange.200" p={1} borderRadius="md">{app}</Text>
              )) || <Text color="gray.500">Geen toepassingen vermeld</Text>}
            </HStack>
            <Link href={project.link} isExternal color="orange.600" _hover={{ textDecoration: 'underline' }}>Bekijk de code voor dit project</Link>
          </VStack>
        </Box>
      ))}
      <ImageModal isOpen={isOpen} images={currentImages} onClose={onClose} />
    </Box>
  );
};

const ImageModal = React.memo(({ isOpen, images, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xlg"> {/* Adjust modal size */}
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            className="swiper-modal"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={image} alt={`Slide ${index + 1}`} borderRadius="md" maxH="500px" /> {/* Adjust max height */}
              </SwiperSlide>
            ))}
          </Swiper>
          <Button onClick={onClose} mt={4} colorScheme="orange">Close</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default Projects;
