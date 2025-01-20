import React from "react";
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";

export function ContactFooter() {
  // Nouvelle palette de couleurs
  const colors = {
    primary: useColorModeValue("teal.700", "teal.300"),
    secondary: useColorModeValue("purple.500", "purple.300"),
    text: useColorModeValue("gray.800", "gray.100"),
  };

  return (
    <Box mt={8} textAlign="center">
      <Text fontSize="md" color={colors.text}>
        N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. Vous pouvez me trouver sur{" "}
        <Link
          href="https://www.linkedin.com/in/david-cialone-6a5a627b/"
          target="_blank"
          rel="noopener noreferrer"
          color={colors.primary}
          fontWeight="bold"
          _hover={{ textDecoration: "underline", color: useColorModeValue("teal.600", "teal.400") }}
        >
          LinkedIn
        </Link>{" "}
        ou me joindre par{" "}
        <Link
          href="mailto:cialonedavid@gmail.com"
          color={colors.primary}
          fontWeight="bold"
          _hover={{ textDecoration: "underline", color: useColorModeValue("teal.600", "teal.400") }}
        >
          email
        </Link>.
      </Text>
    </Box>
  );
}