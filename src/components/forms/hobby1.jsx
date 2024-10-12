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

export function Hobby1() {
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
        <Heading size='md'>Le sport</Heading>
        <Text pt='2' fontSize='md'>
         "Un esprit sain dans un corps sain"
        </Text>
      </CardHeader>

      <CardBody>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          {/* Colonne de l'image */}
          <Box flex="1" display="flex" justifyContent="center">
            <img 
              src="/portefolio/images/sports.jpg"
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
                  Volley ball
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Sport collectif , ma passion
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Fitness
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Pour garder la forme
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Running
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Pour être en harmonie avec la nature
                </Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}
