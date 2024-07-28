import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import profileImg from '../assets/images/Profiel foto.jpg';

const AboutMe = () => {  
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <Box as="main" p={5} bg="orange.50">
      <Box as="section" id="about">
        <VStack spacing={8} align="start">
          <Image
            src={profileImg}
            alt="Adriaen Limborgh"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            mx="auto"
            border="2px"
            borderColor="orange.500"
          />
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg" color="orange.900">Over mij</Heading>
            <Text fontSize="lg" color="gray.700">
              Hallo! Ik ben Adriaen Limborgh, een gepassioneerde Full Stack Developer met een talent voor het maken van innovatieve webapplicaties. Ik word gedreven door de uitdaging om complexe problemen op te lossen en voortdurend nieuwe technologieën te leren.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Mijn reis begon met een grote interesse in technologie, wat ertoe leidde dat ik een carrière als ontwikkelaar nastreefde. Door de jaren heen heb ik mijn vaardigheden aangescherpt door middel van verschillende projecten, trainingen en professionele ervaringen.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Ik ben gespecialiseerd in zowel frontend- als backend-ontwikkeling, met expertise in HTML, CSS, JavaScript, React en Python. Ik wil altijd graag nieuwe uitdagingen aangaan en bijdragen aan spannende projecten.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Verken gerust mijn <RouterLink to="/projects" style={{ color: 'orange.600', textDecoration: 'underline' }} onClick={scrollToTop}>projecten</RouterLink> om te zien waar ik aan heb gewerkt, of neem contact op via het <RouterLink to="/contact" style={{ color: 'orange.600', textDecoration: 'underline' }} onClick={scrollToTop}>contact</RouterLink> pagina. Ik kijk ernaar uit om met je in contact te komen!
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default AboutMe;
