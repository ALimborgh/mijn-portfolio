import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Image, Text, VStack, useColorModeValue, Link } from '@chakra-ui/react';
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
    <Box as="main" py={10} px={5} bg={useColorModeValue('orange.50', 'gray.800')}>
      <Box as="section" id="about" maxW="800px" mx="auto">
        <VStack spacing={8} align="center">
          <Image
            src={profileImg}
            alt="Adriaen Limborgh"
            borderRadius="full"
            boxSize={{ base: '120px', md: '150px' }}
            objectFit="cover"
            mx="auto"
            border="4px solid"
            borderColor="orange.500"
            mb={4}
          />
          <VStack spacing={4} align="center">
            <Heading as="h2" size="lg" color="orange.900" textAlign="center">Over mij</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')} textAlign="center">
              Hallo! Ik ben Adriaen Limborgh, een gepassioneerde Full Stack Developer met een talent voor het maken van innovatieve webapplicaties. Ik word gedreven door de uitdaging om complexe problemen op te lossen en voortdurend nieuwe technologieën te leren.
            </Text>
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')} textAlign="center">
              Mijn reis begon met een grote interesse in technologie, wat ertoe leidde dat ik een carrière als ontwikkelaar nastreefde. Door de jaren heen heb ik mijn vaardigheden aangescherpt door middel van verschillende projecten, trainingen en professionele ervaringen.
            </Text>
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')} textAlign="center">
              Ik ben gespecialiseerd in zowel frontend- als backend-ontwikkeling, met expertise in HTML, CSS, JavaScript, React en Python. Ik wil altijd graag nieuwe uitdagingen aangaan en bijdragen aan spannende projecten.
            </Text>
            <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.300')} textAlign="center">
              Verken gerust mijn <Link as={RouterLink} to="/projects" color="orange.600" onClick={scrollToTop} textDecoration="underline">projecten</Link> om te zien waar ik aan heb gewerkt, of neem contact op via de <Link as={RouterLink} to="/contact" color="orange.600" onClick={scrollToTop} textDecoration="underline">contact</Link> pagina. Ik kijk ernaar uit om met je in contact te komen!
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default AboutMe;
