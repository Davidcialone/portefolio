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

export function Project1() {
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
        <Heading size='md'>On The Road Again</Heading>
        <Text pt='2' fontSize='md'>
          L'application pour revivre ses voyages
        </Text>
      </CardHeader>

      <CardBody>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          {/* Colonne de l'image */}
          <Box flex="1" display="flex" justifyContent="center">
            <img 
              src="portefolio/images/Paris.png"
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
