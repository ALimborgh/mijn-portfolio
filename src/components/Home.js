import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Link,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import projectsData from '../data/ProjectsData';
import profileImg from '../assets/images/Profiel foto.jpg';

const Home = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (path) => {
    scrollToTop();
    navigate(path);
  };

  const featuredProjects = projectsData.slice(-3);

  return (
    <Box bg={useColorModeValue('#FDF6F0', '#333333')} minH="100vh" py={10}>
      {/* Hero Section */}
      <Box as="section" bg="#D99152" color="white" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4} fontWeight="bold" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
          Welkom op mijn website!
        </Heading>
        <Text fontSize="xl" mb={6}>
          Ik ben Adriaen Limborgh, een Full Stack Developer met een passie voor het maken van innovatieve webapplicaties.
        </Text>
        <Button
          bg="#F4A261"
          color="white"
          size="lg"
          _hover={{ bg: '#E76F51' }}
          onClick={() => handleNavigation('/projects')}
        >
          Bekijk mijn werk
        </Button>
      </Box>

      {/* Over Mij Section */}
      <Box as="section" py={20} px={8} maxW="1200px" mx="auto">
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src={profileImg}
            alt="Adriaen Limborgh"
            mb={{ base: 4, md: 0 }}
            mr={{ md: 8 }}
            boxShadow="lg"
          />
          <VStack align="flex-start">
            <Heading as="h2" size="xl" color="#D99152" fontWeight="bold">
              Over Mij
            </Heading>
            <Text fontSize="lg" color="#333333">
              Hallo! Ik ben Adriaen Limborgh, een gepassioneerde Full Stack Developer met een talent voor het maken van innovatieve webapplicaties. Ik word gedreven door de uitdaging om complexe problemen op te lossen en voortdurend nieuwe technologieën te leren.
            </Text>
            <Link
              as={RouterLink}
              to="/about"
              color="#E76F51"
              fontWeight="bold"
              onClick={scrollToTop}
            >
              Lees meer
            </Link>
          </VStack>
        </Flex>
      </Box>

      {/* Projecten Section */}
      <Box as="section" bg={useColorModeValue('#FFF3E2', '#444444')} py={20} px={8}>
        <VStack spacing={8} align="center" maxW="1200px" mx="auto">
          <Heading as="h2" size="xl" color="#333333" fontWeight="bold">
            Projecten
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="800px" color="#555555">
            Hier zijn enkele van mijn recente projecten waar ik aan heb gewerkt. Neem een kijkje om te zien wat ik heb gedaan!
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
            {featuredProjects.map((project) => (
              <Box
                key={project.id}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg="white"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.05)' }}
              >
                <Image
                  borderRadius="md"
                  src={project.imagePaths[0]}
                  alt={project.title}
                  mb={4}
                />
                <Heading as="h3" size="md" mb={2} color="#D99152" fontWeight="bold">
                  {project.title}
                </Heading>
                <Text mb={4} color="#333333">
                  {project.description.substring(0, 100)}...
                </Text>
                <Button
                  bg="#D99152"
                  color="white"
                  size="sm"
                  _hover={{ bg: '#E76F51' }}
                  onClick={() => handleNavigation(`/projects/${project.id}`)}
                >
                  Lees meer
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          <Button
            bg="#E76F51"
            color="white"
            size="lg"
            mt={8}
            _hover={{ bg: '#D99152' }}
            onClick={() => handleNavigation('/projects')}
          >
            Bekijk alle projecten
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
