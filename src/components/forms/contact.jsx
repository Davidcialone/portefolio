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
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const buttonHoverColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box bg={bgColor} minH="100vh" p={4}>
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
        <Heading as="h1" size="xl" color={textColor} mb={4}>
          Contactez-moi
        </Heading>

        {/* Texte d'introduction */}
        <Text fontSize="lg" lineHeight="1.8" color={textColor}>
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
              colorScheme="linkedin"
              _hover={{ bg: buttonHoverColor }}
            >
              Linkedin
            </Button>
          </a>

          {/* Bouton Email */}
          <a href="mailto:cialonedavid@gmail.com">
            <Button
              size="lg"
              variant="solid"
              colorScheme="teal"
              _hover={{ bg: buttonHoverColor }}
            >
              Email
            </Button>
          </a>
        </HStack>
      </VStack>
    </Box>
  );
}
