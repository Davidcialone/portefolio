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
  useColorModeValue,
} from "@chakra-ui/react";

export function Hobby2() {
  // Nouvelle palette de couleurs
  const colors = {
    primary: useColorModeValue("teal.700", "teal.300"),
    secondary: useColorModeValue("purple.500", "purple.300"),
    background: useColorModeValue("gray.50", "gray.900"),
    text: useColorModeValue("gray.800", "gray.100"),
    border: useColorModeValue("teal.400", "teal.700"),
    badge: useColorModeValue("teal.300", "teal.800"),
  };

  // Utiliser un breakpoint pour changer la disposition selon la taille de l'écran
  const flexDirection = useBreakpointValue({
    base: 'column', // Pour les écrans inférieurs à 1200px
    md: 'column',
    lg: 'column',
    xl: 'row', // Pour les écrans supérieurs à 1200px
  });

  return (
    <Card bg={colors.background} border={`1px solid ${colors.border}`} borderRadius="lg" shadow="lg">
      <CardHeader>
        <Heading size='md' color={colors.primary}>Les voyages</Heading>
        <Text pt='2' fontSize='md' color={colors.text}>
          "À la découverte des autres cultures"
        </Text>
      </CardHeader>

      <CardBody>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          {/* Colonne de l'image */}
          <Box flex="1" display="flex" justifyContent="center">
            <img
              src="/portefolio/images/voyages.png"
              alt="Projet 3"
              style={{
                maxWidth: '70%', // Limite la largeur de l'image à 70% de son conteneur
                height: 'auto', // Garde le ratio de l'image
                borderRadius: '8px', // Ajoute des coins arrondis
                boxShadow: 'lg', // Ajoute une ombre portée
              }}
            />
          </Box>

          {/* Colonne de texte */}
          <Box paddingTop="2rem" flex="1">
            <Stack divider={<StackDivider borderColor={colors.border} />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Europe
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Paris, Londres, Rome, Florence, Barcelone, Séville, Prague ...
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Amérique du Nord et du Sud
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  New York, Playa del Carmen, Guadeloupe ...
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Asie
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Koh Samui ...
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Afrique du Nord
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
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