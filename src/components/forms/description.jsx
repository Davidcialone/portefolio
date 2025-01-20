import React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  Divider,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaLightbulb, FaMapMarkerAlt, FaCog, FaUsers } from 'react-icons/fa';

export function Description() {
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
    <Box
      bg={colors.background}
      p={8}
      borderRadius="lg"
      shadow="2xl"
      borderWidth="1px"
      borderColor={colors.border}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <VStack spacing={6} align="flex-start">
        {/* Titre principal */}
        <Heading as="h2" size="lg" color={colors.primary}>
          À propos de moi
        </Heading>

        {/* Divider */}
        <Divider borderColor={colors.primary} />

        {/* Section 1 */}
        <Flex alignItems="center">
          <Icon as={FaUsers} boxSize={6} color={colors.primary} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={colors.text}>
            Fort d'une solide expérience en{' '}
            <Text as="span" fontWeight="bold" color={colors.primary}>
              management
            </Text>{' '}
            et en{' '}
            <Text as="span" fontWeight="bold" color={colors.primary}>
              gestion de la relation client
            </Text>
            , j'ai su développer une approche axée sur l'efficacité et la performance.
          </Text>
        </Flex>

        {/* Section 2 */}
        <Flex alignItems="center">
          <Icon as={FaCog} boxSize={6} color={colors.primary} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={colors.text}>
            En complément de mes compétences managériales, j'ai acquis des connaissances en{' '}
            <Text as="span" fontWeight="bold" color={colors.primary}>
              développement
            </Text>
            , me permettant de concevoir des solutions adaptées aux défis techniques que vous pourriez rencontrer.
          </Text>
        </Flex>

        {/* Section 3 */}
        <Flex alignItems="center">
          <Icon as={FaLightbulb} boxSize={6} color={colors.primary} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={colors.text}>
            Organisé, rigoureux et à l'écoute, je mets mes compétences en{' '}
            <Text as="span" fontWeight="bold" color={colors.primary}>
              management
            </Text>{' '}
            et en{' '}
            <Text as="span" fontWeight="bold" color={colors.primary}>
              développement
            </Text>{' '}
            au service de vos objectifs stratégiques, apportant ainsi une réelle plus-value à vos projets.
          </Text>
        </Flex>

        {/* Section 4 */}
        <Flex alignItems="center">
          <Icon as={FaMapMarkerAlt} boxSize={6} color={colors.primary} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={colors.text}>
            Basé à{' '}
            <Text as="span" fontWeight="bold" color={colors.primary}>
              Lyon
            </Text>{' '}
            et ses environs, je suis prêt à relever vos défis et à contribuer au succès de votre entreprise.
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
}