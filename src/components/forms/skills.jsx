import React from "react";
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
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUsers, FaHandshake, FaCode } from "react-icons/fa";

export function Skills() {
  // Nouvelle palette de couleurs
  const colors = {
    primary: useColorModeValue("teal.700", "teal.300"),
    secondary: useColorModeValue("purple.500", "purple.300"),
    background: useColorModeValue("gray.50", "gray.900"),
    text: useColorModeValue("gray.800", "gray.100"),
    border: useColorModeValue("teal.400", "teal.700"),
    badge: useColorModeValue("teal.300", "teal.800"),
  };

  // Styles pour les cartes
  const cardStyles = {
    bg: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: "lg",
    shadow: "lg",
    transition: "transform 0.3s, background-color 0.3s",
    _hover: {
      transform: "scale(1.05)",
      bg: useColorModeValue("gray.100", "gray.700"),
    },
  };

  return (
    <Box padding="8" bg={colors.background} borderRadius="lg">
      {/* Titre principal */}
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        marginBottom="6"
        color={colors.primary}
      >
        Mes Compétences
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        {/* Card 1 - Management */}
        <Card {...cardStyles}>
          <CardHeader textAlign="center">
            <Icon as={FaUsers} boxSize={8} color={colors.primary} mb="2" />
            <Heading size="md" color={colors.primary}>
              Management
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider borderColor={colors.border} />} spacing="4">
              <Box>
                <img
                  src="/portefolio/images/management.png"
                  alt="Management"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize="sm" color={colors.text}>
                  Gestion d'équipe et leadership
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Collaboration et communication efficaces
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Inspiration et motivation
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Atteinte des objectifs stratégiques
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Accompagnement des collaborateurs
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Card 2 - Relation Client */}
        <Card {...cardStyles}>
          <CardHeader textAlign="center">
            <Icon as={FaHandshake} boxSize={8} color={colors.primary} mb="2" />
            <Heading size="md" color={colors.primary}>
              Relation Client
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider borderColor={colors.border} />} spacing="4">
              <Box>
                <img
                  src="/portefolio/images/client.png"
                  alt="Relation Client"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize="sm" color={colors.text}>
                  Communication claire et adaptée
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Écoute active et attentive
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Gestion efficace des conflits
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Focalisé sur la satisfaction client
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Suivi personnalisé après-vente
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Card 3 - Développement */}
        <Card {...cardStyles}>
          <CardHeader textAlign="center">
            <Icon as={FaCode} boxSize={8} color={colors.primary} mb="2" />
            <Heading size="md" color={colors.primary}>
              Développement
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider borderColor={colors.border} />} spacing="4">
              <Box>
                <img
                  src="/portefolio/images/dev.png"
                  alt="Développement"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
              <Box>
                <Text fontSize="sm" color={colors.text}>
                  Développement d'applications web
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Adaptation aux besoins clients
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Utilisation de technologies modernes
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Collaboration avec des équipes agiles
                </Text>
                <Text fontSize="sm" color={colors.text}>
                  Tests approfondis pour assurer la qualité
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}