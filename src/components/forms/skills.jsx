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
} from "@chakra-ui/react";

export function Skills() {
  return (
    <Box padding="4">
      {/* <Heading as="h3" size="lg" textAlign="center" marginBottom="4">
        {/* Add a heading if necessary */}
        {/* Mes Compétences */}
      {/* </Heading> */} 

      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing="4">
        {/* Card 1 */}
        <Card border="2px solid" borderColor="gray.300" borderRadius="8px">
          <CardHeader>
            <Heading size="md">Management</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src="/portefolio/images/management.png"
                  alt="Management"
                  style={{ width: '15rem', height: '15rem', objectFit: 'cover', borderRadius: '8px' }}
                />
              </Box>
              <Box>
                <Text pt="2" fontSize="sm">Gestion d'équipe et leadership</Text>
                <Text pt="2" fontSize="sm">Favorise la collaboration et la communication</Text>
                <Text pt="2" fontSize="sm">Inspire et motive les membres de l’équipe</Text>
                <Text pt="2" fontSize="sm">Oriente les choix pour atteindre les objectifs</Text>
                <Text pt="2" fontSize="sm">Accompagnement des collaborateurs</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Card 2 */}
        <Card border="2px solid" borderColor="gray.300" borderRadius="8px">
          <CardHeader>
            <Heading size="md">Client</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src="/portefolio/images/client.png"
                  alt="Client"
                  style={{ width: '15rem', height: '15rem', objectFit: 'cover', borderRadius: '8px' }}
                />
              </Box>
              <Box>
                <Text pt="2" fontSize="sm">Communication claire et adaptée</Text>
                <Text pt="2" fontSize="sm">Écoute active et attentive</Text>
                <Text pt="2" fontSize="sm">Gestion efficace des conflits</Text>
                <Text pt="2" fontSize="sm">Focalisé sur la satisfaction</Text>
                <Text pt="2" fontSize="sm">Suivi personnalisé après-vente</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {/* Card 3 */}
        <Card border="2px solid" borderColor="gray.300" borderRadius="8px">
          <CardHeader>
            <Heading size="md">Développement</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src="/portefolio/images/dev.png"
                  alt="Développement"
                  style={{ width: '15rem', height: '15rem', objectFit: 'cover', borderRadius: '8px' }}
                />
              </Box>
              <Box>
                <Text pt="2" fontSize="sm">Développement d'applications web</Text>
                <Text pt="2" fontSize="sm">Adaptation aux besoins clients</Text>
                <Text pt="2" fontSize="sm">Technologies modernes et adaptées</Text>
                <Text pt="2" fontSize="sm">Collaboration avec les équipes agiles</Text>
                <Text pt="2" fontSize="sm">Tests approfondis pour qualité assurée</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
