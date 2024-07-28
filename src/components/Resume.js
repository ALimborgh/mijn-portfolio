import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box as="main" p={5} bg="orange.50" minH="100vh">
      <VStack align="start" spacing={8} mx="auto" maxW="800px" w="100%">
        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Profiel
          </Heading>
          <Text color="gray.700" textAlign="justify">
            Ik ben een gedreven expert met een passie voor het aanpakken van uitdagende problemen. Mijn leergierigheid motiveert me om voortdurend
            nieuwe vaardigheden te verwerven en te verbeteren. Ik sta open voor een nieuwe uitdaging waarin ik mijn kennis kan vergroten en
            een waardevolle rol kan spelen in een dynamische en innovatieve werkomgeving. Ik geloof sterk in de kracht van samenwerking en
            communicatie, en ik streef ernaar om altijd een positieve bijdrage te leveren aan het team. Mijn analytische benadering helpt me om complexe
            vraagstukken te doorgronden en oplossingen te vinden die zowel efficiënt als effectief zijn. Daarnaast ben ik flexibel en pas ik me
            gemakkelijk aan veranderende omstandigheden aan, wat me in staat stelt om onder druk te presteren en deadlines te halen. In mijn vorige
            functies heb ik aangetoond dat ik niet alleen technisch bekwaam ben, maar ook een betrouwbare en inspirerende collega. Ik kijk
            ernaar uit om mijn expertise in te zetten en verder te ontwikkelen binnen een organisatie die innovatie en groei waardeert.
          </Text>
          <Text mt={2} color="gray.700">
            Wil je mij contacteren? <Link to="/Contact" style={{ color: 'orange.600', textDecoration: 'underline' }}>Klik dan hier</Link> en vul het contactformulier in.
          </Text>
        </Box>

        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Opleiding
          </Heading>
          <Box mb={4}>
            <Heading as="h3" size="md" color="orange.800">Winc Academy - Fullstack Developer</Heading>
            <Text color="gray.600">Juli 2024</Text>
            <UnorderedList mt={2} color="gray.700">
              <ListItem>Een gevarieerde set vaardigheden verworven, variërend van HTML, CSS, JavaScript, React, Git, Python, Flask, Database Expertise, PeeWee, Wireframing, Toegankelijkheid, Webdesign en Coderingsvaardigheden.</ListItem>
            </UnorderedList>
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" color="orange.800">Hogeschool van Arnhem en Nijmegen - Propedeuse Lerarenopleiding Wiskunde</Heading>
            <Text color="gray.600">Juli 2020</Text>
            <UnorderedList mt={2} color="gray.700">
              <ListItem>Propedeuse behaald met uitstekende resultaten.</ListItem>
            </UnorderedList>
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" color="orange.800">Lyceum Schöndeln - HAVO Diploma</Heading>
            <Text color="gray.600">Juli 2012</Text>
            <UnorderedList mt={2} color="gray.700">
              <ListItem>Havodiploma behaald met uitstekende resultaten.</ListItem>
              <ListItem>Actief vrijwilligerswerk gedaan voor het vak CKV.</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Werkervaring
          </Heading>
          <Box mb={4}>
            <Heading as="h3" size="md" color="orange.800">McDonald's - Crewtrainer</Heading>
            <Text color="gray.600">November 2011 – heden</Text>
            <UnorderedList mt={2} color="gray.700">
              <ListItem>Trainen en begeleiden van nieuwe en bestaande teamleden.</ListItem>
              <ListItem>Verantwoordelijk voor voorraadbeheer en productopslag.</ListItem>
              <ListItem>Toezicht houden op de kwaliteitscontrole van voedselbereiding en klantenservice.</ListItem>
            </UnorderedList>
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="md" color="orange.800">Studiebende - Bijlesdocent</Heading>
            <Text color="gray.600">Augustus 2016 – heden</Text>
            <UnorderedList mt={2} color="gray.700">
              <ListItem>Geven van bijlessen in exacte vakken aan middelbare scholieren.</ListItem>
              <ListItem>Coachen en begeleiden van leerlingen bij hun studie en huiswerk.</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Vaardigheden
          </Heading>
          <UnorderedList mt={2} color="gray.700">
            <ListItem>Gevorderde kennis van Microsoft Office.</ListItem>
            <ListItem>Vaardigheid in het vereenvoudigen van complexe concepten.</ListItem>
            <ListItem>Uitstekende luister- en communicatievaardigheden.</ListItem>
            <ListItem>Sterke teamspeler met een ondersteunende houding.</ListItem>
            <ListItem>Ervaring met data-analyse.</ListItem>
          </UnorderedList>
        </Box>

        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Talen
          </Heading>
          <UnorderedList mt={2} color="gray.700">
            <ListItem>Nederlands: moedertaal</ListItem>
            <ListItem>Duits: moedertaal</ListItem>
            <ListItem>Engels: vloeiend</ListItem>
          </UnorderedList>
        </Box>

        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Vrijwilligerswerk
          </Heading>
          <Box mb={4}>
            <Heading as="h3" size="md" color="orange.800">Hockeyclub Concordia - Hockeytrainer</Heading>
            <UnorderedList mt={2} color="gray.700">
              <ListItem>Trainer van jeugdteams, waarbij ik vaardigheden en teamwork bevorder.</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box as="section" p={5} bg="white" borderRadius="md" boxShadow="md" w="100%">
          <Heading as="h2" size="lg" mb={3} color="orange.900" borderBottom="2px solid" borderColor="orange.300" pb={2}>
            Belangrijkste interesses
          </Heading>
          <UnorderedList mt={2} color="gray.700">
            <ListItem>Gamen: Het ontwikkelen van strategisch inzicht en probleemoplossend vermogen.</ListItem>
            <ListItem>Hockey: Het versterken van teamgeest en fysieke fitheid.</ListItem>
            <ListItem>Dungeons & Dragons (D&D): Het bevorderen van creativiteit en samenwerking door middel van rollenspel.</ListItem>
            <ListItem>Schaken: Het verbeteren van strategisch denken en concentratie.</ListItem>
            <ListItem>Films en series: De analyse van verhaallijnen en karakterontwikkeling, alsmede ontspanning.</ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Box>
  );
}

export default Resume;
