import React from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Badge,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";

export function MyBrand() {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const bgColor = useColorModeValue("blue.50", "blue.900");
  const borderColor = useColorModeValue("blue.300", "blue.700");

  return (
    <Box
      bgGradient={`linear(to-b, ${bgColor}, ${useColorModeValue(
        "white",
        "gray.800"
      )})`}
      p={8}
      borderRadius="lg"
      shadow="2xl"
      borderWidth="1px"
      borderColor={borderColor}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.03)" }}
    >
      {/* Utilisation de VStack pour le mobile (photo au-dessus du texte) et HStack pour desktop (photo à gauche, texte à droite) */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Pour mobile, l'image est au-dessus du texte (colonne), sinon à gauche du texte (ligne)
        alignItems="center"
        justifyContent="center"
        spacing={6}
      >
        {/* Image de profil */}
        <Image
          src="/portefolio/images/profil2.png"
          alt="Profil"
          borderRadius="full"
          boxSize={{ base: "120px", md: "150px" }} // Image plus petite sur mobile
          objectFit="cover"
          border="4px solid"
          borderColor={borderColor}
          shadow="lg"
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: "scale(1.1)", shadow: "xl" }}
          mb={{ base: 4, md: 0 }} // Espace entre l'image et le texte sur mobile
        />

        {/* Texte descriptif */}
        <VStack alignItems="flex-start" spacing={4}>
          {/* Badge professionnel */}
          <Badge
            colorScheme="blue"
            fontSize="1rem"
            fontWeight="bold"
            px={4}
            py={1}
            borderRadius="full"
          >
            Professionnel confirmé
          </Badge>

          {/* Détails avec tooltips */}
          <Tooltip
            label="Expérience approfondie dans le domaine de la relation client"
            fontSize="md"
          >
            <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={textColor}>
              25 ans d'expérience dans la relation client
            </Text>
          </Tooltip>

          <Tooltip label="Expertise prouvée en gestion d'équipe" fontSize="md">
            <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={textColor}>
              15 ans de management
            </Text>
          </Tooltip>

          <Tooltip
            label="Des compétences techniques solides en développement"
            fontSize="md"
          >
            <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={textColor}>
              Développeur en début de carrière
            </Text>
          </Tooltip>

          <Tooltip
            label="Valeurs fortes inspirées par la pratique du sport"
            fontSize="md"
          >
            <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={textColor}>
              Passionné par le sport et ses valeurs
            </Text>
          </Tooltip>
        </VStack>
      </Box>
    </Box>
  );
}
