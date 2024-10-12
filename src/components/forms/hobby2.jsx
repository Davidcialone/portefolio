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
} from "@chakra-ui/react";

export function Hobby2() {
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
        <Heading size='md'>Les voyages</Heading>
        <Text pt='2' fontSize='md'>
         "A la découvertes des autres cultures"
        </Text>
      </CardHeader>

      <CardBody>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          {/* Colonne de l'image */}
          <Box flex="1" display="flex" justifyContent="center">
            <img 
              src="/portefolio/images/voyages.png"
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
          <Box paddingTop="2rem" flex="1">
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Europe
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Paris, Londres, Rome, Florence, Barcelone, Séville, Prague ...
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Amérique du Nord et du Sud
                </Heading>
                <Text pt='2' fontSize='sm'>
                  New York, Playa del Carmen, Guadeloupe ...
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Asie
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Koh Samui ...
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Afrique du nord
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Marrakech, Tunis ...
                </Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}
