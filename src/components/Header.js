import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import TriforceSVG from './TriforceSVG';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('Adriaen Limborgh');
  const [showTriforce, setShowTriforce] = useState(false);

  const handleClick = () => {
    setShowTriforce(!showTriforce);

    if (!showTriforce) {
      setName(<TriforceSVG />);
      setTimeout(() => {
        setName('Adriaen Limborgh');
        setShowTriforce(false);
      }, 3000);
    }
  };

  const bgColor = useColorModeValue('orange.50', 'gray.900');
  const linkColor = useColorModeValue('brown.700', 'white');
  const hoverColor = useColorModeValue('orange.300', 'brown.700');
  const headingColor = useColorModeValue('brown.900', 'orange.200');

  return (
    <Box bg={bgColor} px={4} boxShadow="md" position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading as="h1" size="md" onClick={handleClick} cursor="pointer" color={headingColor}>
          {name}
        </Heading>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          as={'nav'}
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
          ml="auto"
        >
          <Link as={RouterLink} to="/" color={linkColor} _hover={{ color: hoverColor }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color={linkColor} _hover={{ color: hoverColor }}>
            Over mij
          </Link>
          <Link as={RouterLink} to="/projects" color={linkColor} _hover={{ color: hoverColor }}>
            Projecten
          </Link>
          <Link as={RouterLink} to="/resume" color={linkColor} _hover={{ color: hoverColor }}>
            CV
          </Link>
          <Link as={RouterLink} to="/contact" color={linkColor} _hover={{ color: hoverColor }}>
            Contact
          </Link>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose} color={linkColor} _hover={{ color: hoverColor }}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" onClick={onClose} color={linkColor} _hover={{ color: hoverColor }}>
              Over mij
            </Link>
            <Link as={RouterLink} to="/projects" onClick={onClose} color={linkColor} _hover={{ color: hoverColor }}>
              Projecten
            </Link>
            <Link as={RouterLink} to="/resume" onClick={onClose} color={linkColor} _hover={{ color: hoverColor }}>
              CV
            </Link>
            <Link as={RouterLink} to="/contact" onClick={onClose} color={linkColor} _hover={{ color: hoverColor }}>
              Contact
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
