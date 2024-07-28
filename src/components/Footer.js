import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Text, Link, VStack, HStack, Image } from '@chakra-ui/react';
import FooterYear from './FooterYear';
import githubLogo from '../assets/images/github-6980894_1280.png';
import linkedInLogo from '../assets/images/LinkedIn_logo_initials.png';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <Box as="footer" bg="orange.900" color="white" py={10} px={5}>
      <VStack spacing={10} align="stretch" maxW="1200px" mx="auto">
        <HStack justify="space-between" align="start" flexWrap="wrap" spacing={8}>
          <Box>
            <Heading as="h3" size="md" mb={4}>Over Mij</Heading>
            <Text mb={4}>Welkom op mijn website! Ik ben een Fullstack Developer met een passie voor het oplossen van complexe problemen.</Text>
            <Link 
              as={RouterLink} 
              to="about" 
              onClick={scrollToTop} 
              color="orange.500" 
              _hover={{ color: 'orange.300', textDecoration: 'underline' }}
            >
              Lees meer
            </Link>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Direct naar</Heading>
            <VStack align="start" spacing={2}>
              <Link as={RouterLink} to="/" onClick={scrollToTop} color="orange.500" _hover={{ color: 'orange.300', textDecoration: 'underline' }}>Home</Link>
              <Link as={RouterLink} to="about" onClick={scrollToTop} color="orange.500" _hover={{ color: 'orange.300', textDecoration: 'underline' }}>Over mij</Link>
              <Link as={RouterLink} to="projects" onClick={scrollToTop} color="orange.500" _hover={{ color: 'orange.300', textDecoration: 'underline' }}>Projecten</Link>
              <Link as={RouterLink} to="resume" onClick={scrollToTop} color="orange.500" _hover={{ color: 'orange.300', textDecoration: 'underline' }}>CV</Link>
              <Link as={RouterLink} to="contact" onClick={scrollToTop} color="orange.500" _hover={{ color: 'orange.300', textDecoration: 'underline' }}>Contact</Link>
            </VStack>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Volg Mij</Heading>
            <HStack spacing={4}>
              <Link href="https://nl.linkedin.com/in/adriaen-limborgh-337065147" target="_blank" rel="noopener noreferrer">
                <Image src={linkedInLogo} alt="LinkedIn" boxSize="24px" _hover={{ opacity: 0.8 }} />
              </Link>
              <Link href="https://github.com/ALimborgh" target="_blank" rel="noopener noreferrer">
                <Image src={githubLogo} alt="GitHub" boxSize="24px" _hover={{ opacity: 0.8 }} />
              </Link>
            </HStack>
          </Box>
        </HStack>
        <Box textAlign="center" borderTop="1px" borderColor="gray.700" pt={4}>
          <FooterYear />
          <Text mt={2}>Alle rechten voorbehouden.</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Footer;
