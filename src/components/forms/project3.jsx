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
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export function Project3() {
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
        <Heading size='md'>Projet 3</Heading>
        <Text pt='2' fontSize='md'>
          En cours de développement
          <Link to="" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" style={{ border: "1px solid", marginLeft:"1rem", backgroundColor:"ButtonShadow" }}>
              Bientôt disponible
            </Button>
          </Link>
        </Text>
      </CardHeader>

      <CardBody>
        {/* Utilisation de SimpleGrid pour créer deux colonnes sur les grands écrans */}
        <Box display="flex" flexDirection={flexDirection} alignItems="center" spacing={10}>
          {/* Colonne de la vidéo */}
          <Box flex="1">
          <img
                  src="/portefolio/images/workinprogress.jpg"
                  alt="Projet 3"
                  className="project-image"
                  style={{
                  maxWidth: '70%',  // Limite la largeur de l'image à 80% de son conteneur
                  height: 'auto',    // Garde le ratio de l'image
                  margin: '0 auto',  // Centre l'image horizontalement
                }}
              />
            </Box>
  
            {/* Colonne de texte */}
            <Box flex="1">
              <Stack divider={<StackDivider />} spacing='4'>
                <Box padding='2rem'>
                  <Heading size='xs' textTransform='uppercase'>
                    Stack technique
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Front :
                  </Text>
                  <Text pt='2' fontSize='sm'>
                    Back :
                  </Text>
                </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Contexte
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Projet de fin de formation ...
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Feedback
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Expérience très enrichissante, 1er projet ...
                </Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}
