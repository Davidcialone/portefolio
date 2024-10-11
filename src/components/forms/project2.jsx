// src/components/forms/Project2.js
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
  SimpleGrid, // Utilisation de SimpleGrid pour organiser la disposition en colonnes
  useBreakpointValue
} from "@chakra-ui/react";

export function Project2() {
  // Utiliser un breakpoint pour changer la disposition selon la taille de l'écran
  const columns = useBreakpointValue({ base: 1, md: 2 }); 

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>On The Road Again</Heading>
      </CardHeader>

      <CardBody>
        {/* Utilisation de SimpleGrid pour créer deux colonnes sur les grands écrans */}
        <SimpleGrid columns={columns} spacing={10} alignItems="center">
          {/* Colonne de la vidéo */}
          <Box>
            <video
              src="/portefolio/images/video New York.mp4" // Assurez-vous que le chemin de la vidéo est correct
              controls 
              autoPlay
              loop
              muted
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            >
              Votre navigateur ne supporte pas les vidéos.
            </video>
          </Box>

          {/* Colonne de texte */}
          <Box>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs'>
                  L'application pour revivre ses voyages
                </Heading>
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
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
