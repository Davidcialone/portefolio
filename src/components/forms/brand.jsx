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
  Icon,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaUserTie, FaUsers, FaCode, FaRunning } from "react-icons/fa";

// Animation pour l'image de profil
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export function MyBrand() {
  // Nouvelle palette de couleurs
  const colors = {
    primary: useColorModeValue("teal.700", "teal.300"),
    secondary: useColorModeValue("purple.500", "purple.300"),
    background: useColorModeValue("gray.50", "gray.900"),
    text: useColorModeValue("gray.800", "gray.100"),
    border: useColorModeValue("teal.400", "teal.700"),
    badge: useColorModeValue("teal.300", "teal.800"),
  };

  const floatAnimation = `${float} 3s ease-in-out infinite`;

  return (
    <Box
      bgGradient={`linear(to-b, ${colors.background}, ${useColorModeValue(
        "white",
        "gray.800"
      )})`}
      p={8}
      borderRadius="lg"
      shadow="2xl"
      borderWidth="1px"
      borderColor={colors.border}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.03)" }}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={6}
      >
        {/* Image de profil avec animation */}
        <Image
          src="/portefolio/images/profil1.png"
          alt="Profil"
          borderRadius="full"
          boxSize={{ base: "120px", md: "150px" }}
          objectFit="cover"
          border="4px solid"
          borderColor={colors.border}
          shadow="lg"
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: "scale(1.1)", shadow: "xl" }}
          mb={{ base: 4, md: 0 }}
          animation={floatAnimation}
        />

        {/* Texte descriptif avec icônes */}
        <VStack alignItems="flex-start" spacing={4}>
          <Badge
            bg={colors.badge}
            color={colors.primary}
            fontSize="1rem"
            fontWeight="bold"
            px={4}
            py={1}
            borderRadius="full"
          >
            Professionnel confirmé
          </Badge>

          <Tooltip
            label="Expérience approfondie dans le domaine de la relation client"
            fontSize="md"
          >
            <HStack>
              <Icon as={FaUserTie} color={colors.primary} />
              <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={colors.text}>
                25 ans d'expérience dans la relation client
              </Text>
            </HStack>
          </Tooltip>

          <Tooltip label="Expertise prouvée en gestion d'équipe" fontSize="md">
            <HStack>
              <Icon as={FaUsers} color={colors.primary} />
              <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={colors.text}>
                15 ans de management
              </Text>
            </HStack>
          </Tooltip>

          <Tooltip
            label="Des compétences techniques solides en développement"
            fontSize="md"
          >
            <HStack>
              <Icon as={FaCode} color={colors.primary} />
              <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={colors.text}>
                Développeur en début de carrière
              </Text>
            </HStack>
          </Tooltip>

          <Tooltip
            label="Valeurs fortes inspirées par la pratique du sport"
            fontSize="md"
          >
            <HStack>
              <Icon as={FaRunning} color={colors.primary} />
              <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold" color={colors.text}>
                Passionné par le sport et ses valeurs
              </Text>
            </HStack>
          </Tooltip>
        </VStack>
      </Box>
    </Box>
  );
}