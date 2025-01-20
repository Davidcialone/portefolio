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

export function Hobby1() {
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
        <Heading size='md' color={colors.primary}>Le sport</Heading>
        <Text pt='2' fontSize='md' color={colors.text}>
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
                  Volley ball
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Sport collectif, ma passion
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Fitness
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Pour garder la forme
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Running
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
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