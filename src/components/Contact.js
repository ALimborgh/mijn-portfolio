import React from 'react';
import emailjs from 'emailjs-com';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack } from '@chakra-ui/react';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    emailjs.sendForm('service_bbrbc2m', 'template_13rrfgc', e.target, 'nYSePl5tMfJR0Wwam')
      .then((result) => {
          console.log(result.text);
          alert('Bericht succesvol verzonden!');
      }, (error) => {
          console.log(error.text);
          alert('Verzenden van bericht mislukt, probeer het opnieuw.');
      });
  };

  return (
    <Box as="main" p={5} bg="orange.50">
      <Heading as="h1" mb={6} color="orange.900">Contact mij</Heading>
      <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md">
        <form onSubmit={sendEmail}>
          <VStack spacing={4} align="start">
            <FormControl isRequired>
              <FormLabel htmlFor="name" color="gray.700">Naam:</FormLabel>
              <Input type="text" id="name" name="name" borderColor="orange.300" _focus={{ borderColor: 'orange.500' }} />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel htmlFor="email" color="gray.700">E-mail:</FormLabel>
              <Input type="email" id="email" name="email" borderColor="orange.300" _focus={{ borderColor: 'orange.500' }} />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel htmlFor="message" color="gray.700">Bericht:</FormLabel>
              <Textarea id="message" name="message" rows="5" borderColor="orange.300" _focus={{ borderColor: 'orange.500' }} />
            </FormControl>
            
            <Button type="submit" colorScheme="orange" size="md">Verzenden</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
