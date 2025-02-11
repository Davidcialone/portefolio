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
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export function Project1() {
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
        <Heading size='md' color={colors.primary}>On The Road Again</Heading>
        <Text pt='2' fontSize='md' color={colors.text}>
          L'application pour revivre ses voyages
          <Link to="https://ontheroadagain-client.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              border={`1px solid ${colors.primary}`}
              color={colors.primary}
              marginLeft="1rem"
              _hover={{ bg: colors.primary, color: 'white' }}
            >
              On The Road Again
            </Button>
          </Link>
        </Text>
      </CardHeader>

      <CardBody>
        <Box display="flex" flexDirection={flexDirection} alignItems="center">
          {/* Colonne de l'image */}
          <Box flex="1" display="flex" justifyContent="center">
            <video
              src="/portefolio/images/video New York.mp4" // Assurez-vous que le chemin de la vidéo est correct
              controls
              autoPlay
              loop
              muted
              style={{ width: '90%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            >
              Votre navigateur ne supporte pas les vidéos.
            </video>
          </Box>

          {/* Colonne de texte */}
          <Box flex="1">
            <Stack divider={<StackDivider borderColor={colors.border} />} spacing='4'>
              <Box paddingTop='2rem'>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Stack technique
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Front : React, Material UI
                </Text>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Back : Node.js, Express, Postgres
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Contexte
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  Projet de fin de formation : "On the Road Again"
                  <br /><br />
                  Dans le cadre de notre formation à l'école O'clock, le projet "On the Road Again" a pour objectif
                  de créer une application web immersive pour permettre de revivre leurs souvenirs de voyage à travers plusieurs fonctionnalités clés.
                  <br /><br />
                  <strong>Les photos</strong> : Les utilisateurs pourront télécharger et partager leurs photos de voyage,
                  créant ainsi une galerie visuelle riche et inspirante.
                  <br /><br />
                  <strong>Voyages détaillés</strong> : Chaque utilisateur pourra documenter ses voyages en détail, en incluant les dates,
                  des lieux visités, des activités réalisées, des commentaires et des notes.
                  <br /><br />
                  En utilisant des technologies modernes de développement web, ce projet permettra de mettre en pratique
                  les compétences acquises durant notre formation tout en offrant une plateforme engageante et utile pour les amoureux de l'exploration.
                </Text>
              </Box>

              <Box>
                <Heading size='xs' textTransform='uppercase' color={colors.primary}>
                  Feedback du projet
                </Heading>
                <Text pt='2' fontSize='sm' color={colors.text}>
                  L'expérience de ce projet a été extrêmement enrichissante. En tant que premier projet dans le cadre de notre formation à l'école O'clock,
                  il a marqué le début d'une véritable aventure humaine. Nous avons eu l'opportunité de découvrir le fonctionnement de la méthode agile,
                  ce qui a grandement amélioré notre capacité à travailler en équipe et à nous adapter aux changements.
                  <br /><br />
                  La communication au sein du groupe a été essentielle, favorisant un climat d'entraide et d'échange d'idées.
                  Chaque membre a pu exprimer ses opinions et contribuer activement à l'avancement du projet.
                  L'enthousiasme et l'engagement de chacun ont permis de surmonter les défis rencontrés et d'atteindre nos objectifs.
                </Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}