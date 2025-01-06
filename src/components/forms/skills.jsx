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
  const cardBgColor = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const cardHoverBgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const accentColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box padding="8" bg={useColorModeValue("gray.50", "gray.900")} borderRadius="lg">
      {/* Titre principal */}
      <Heading as="h2" size="lg" textAlign="center" marginBottom="6" color={accentColor}>
        Mes Compétences
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        {/* Card 1 - Management */}
        <Card
          bg={cardBgColor}
          border={`1px solid ${cardBorderColor}`}
          borderRadius="lg"
          shadow="lg"
          transition="transform 0.3s, background-color 0.3s"
          _hover={{ transform: "scale(1.05)", bg: cardHoverBgColor }}
        >
          <CardHeader textAlign="center">
            <Icon as={FaUsers} boxSize={8} color={accentColor} mb="2" />
            <Heading size="md" color={accentColor}>
              Management
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
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
                <Text fontSize="sm" color={textColor}>
                  Gestion d'équipe et leadership
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Collaboration et communication efficaces
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Inspiration et motivation
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Atteinte des objectifs stratégiques
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Accompagnement des collaborateurs
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Card 2 - Relation Client */}
        <Card
          bg={cardBgColor}
          border={`1px solid ${cardBorderColor}`}
          borderRadius="lg"
          shadow="lg"
          transition="transform 0.3s, background-color 0.3s"
          _hover={{ transform: "scale(1.05)", bg: cardHoverBgColor }}
        >
          <CardHeader textAlign="center">
            <Icon as={FaHandshake} boxSize={8} color={accentColor} mb="2" />
            <Heading size="md" color={accentColor}>
              Relation Client
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
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
                <Text fontSize="sm" color={textColor}>
                  Communication claire et adaptée
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Écoute active et attentive
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Gestion efficace des conflits
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Focalisé sur la satisfaction client
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Suivi personnalisé après-vente
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Card 3 - Développement */}
        <Card
          bg={cardBgColor}
          border={`1px solid ${cardBorderColor}`}
          borderRadius="lg"
          shadow="lg"
          transition="transform 0.3s, background-color 0.3s"
          _hover={{ transform: "scale(1.05)", bg: cardHoverBgColor }}
        >
          <CardHeader textAlign="center">
            <Icon as={FaCode} boxSize={8} color={accentColor} mb="2" />
            <Heading size="md" color={accentColor}>
              Développement
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
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
                <Text fontSize="sm" color={textColor}>
                  Développement d'applications web
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Adaptation aux besoins clients
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Utilisation de technologies modernes
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Collaboration avec des équipes agiles
                </Text>
                <Text fontSize="sm" color={textColor}>
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
