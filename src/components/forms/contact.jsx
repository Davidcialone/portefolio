import React from "react";
import { NavbarSite } from "./navbar";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

export function Contact() {
  // Nouvelle palette de couleurs
  const colors = {
    primary: useColorModeValue("teal.700", "teal.300"),
    secondary: useColorModeValue("purple.500", "purple.300"),
    background: useColorModeValue("gray.50", "gray.900"),
    text: useColorModeValue("gray.800", "gray.100"),
    border: useColorModeValue("teal.400", "teal.700"),
    badge: useColorModeValue("teal.300", "teal.800"),
  };

  return (
    <Box bg={colors.background} minH="100vh" p={4}>
      {/* Navbar */}
      <NavbarSite />

      {/* Section principale */}
      <VStack
        spacing={6}
        align="center"
        maxW="800px"
        mx="auto"
        textAlign="center"
      >
        {/* Titre */}
        <Heading as="h1" size="xl" color={colors.primary} mb={4}>
          Contactez-moi
        </Heading>

        {/* Texte d'introduction */}
        <Text fontSize="lg" lineHeight="1.8" color={colors.text}>
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. Je suis toujours prêt à échanger et explorer de nouvelles opportunités.
        </Text>

        {/* Boutons pour Linkedin et Email */}
        <HStack spacing={4} mt={4}>
          {/* Bouton Linkedin */}
          <a
            href="https://www.linkedin.com/in/david-cialone-6a5a627b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="solid"
              bg={colors.primary}
              color="white"
              _hover={{ bg: useColorModeValue("teal.600", "teal.400") }}
            >
              Linkedin
            </Button>
          </a>

          {/* Bouton Email */}
          <a href="mailto:cialonedavid@gmail.com">
            <Button
              size="lg"
              variant="solid"
              bg={colors.secondary}
              color="white"
              _hover={{ bg: useColorModeValue("purple.600", "purple.400") }}
            >
              Email
            </Button>
          </a>
        </HStack>
      </VStack>
    </Box>
  );
}