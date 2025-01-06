// src/components/forms/Project3.js
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
  Card,
  CardHeader,
  CardBody,
  useBreakpointValue,
  border,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export function Project2() {
  // Utiliser un breakpoint pour changer la disposition selon la taille de l'écran
  const flexDirection = useBreakpointValue({
    base: 'column', // Pour les écrans inférieurs à 1200px
    md: 'column',
    lg: 'column', 
    xl: 'row'       // Pour les écrans supérieurs à 1200px
  }); 

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>O Resto</Heading>
        <Text pt='2' fontSize='md'>
          L'application pour gérer votre restaurant
          <Link to="https://tiki-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" style={{ border: "1px solid", marginLeft:"1rem", backgroundColor:"ButtonShadow" }}>
              O Resto pour les clients
            </Button>
          </Link>
            {/* <Link to="https://tiki-ermployee.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" style={{ border: "1px solid", marginLeft:"1rem", backgroundColor:"ButtonShadow" }}>
              O Resto Front pour les employés
            </Button>
          </Link> */}
        </Text>
                 
      </CardHeader>

      <CardBody>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          {/* Colonne de l'image */}
          <Box flex="1" display="flex" justifyContent="center">
          <img src="public\images\Oresto.png" alt="O Resto" style={{ width: '90%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
            
          </Box>

          {/* Colonne de texte */}
          <Box flex="1">
            <Stack divider={<StackDivider />} spacing='4'>
              <Box paddingTop='2rem'>
                <Heading size='xs' textTransform='uppercase'>
                  Stack technique
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Front : React, Tailwind
                </Text>
                <Text pt='2' fontSize='sm'>
                  Back : Node.js, Express, Postgres
                </Text>
              </Box>

              <Box>
  <Heading size='xs' textTransform='uppercase'>
    Contexte
  </Heading>
  <Text pt='2' fontSize='sm'>  
    Le restaurant où travaille mon fils n'a pas de site internet...  
    <br /><br />  
    À l'heure du numérique et de la digitalisation, il est important pour un restaurant de posséder un site internet.  
    <br /><br />  
    Les objectifs de ce projet étaient de créer une application permettant de mettre en avant le restaurant, de gérer les réservations et de consulter les menus.  
</Text>  
</Box>  

<Box>  
  <Heading size='xs' textTransform='uppercase'>  
    Feedback du projet  
  </Heading>  
  <Text pt='2' fontSize='sm'>  
    Ce projet a été une expérience enrichissante car il m'a permis de répondre à un besoin réel.  
    <br /><br />  
    J'ai pu mettre en pratique mes compétences en développement web en créant une solution sur mesure pour le restaurant. Cela m'a également permis d'apprendre à mieux comprendre les besoins spécifiques d'une entreprise dans le domaine de la restauration, comme la gestion des réservations et la mise en valeur de son identité.  
    <br /><br />  
    De plus, ce projet m'a permis de perfectionner mes compétences techniques en travaillant sur l'optimisation de l'expérience utilisateur, la création d'une interface intuitive et l'intégration d'un système de réservation efficace.  
    <br /><br />  
    Enfin, cette réalisation a été une opportunité de collaborer avec les membres du restaurant pour recueillir leurs retours et ajuster le produit final, renforçant ainsi ma capacité à travailler sur des projets concrets et orientés client.  
  </Text>  
</Box>  

            </Stack>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}
