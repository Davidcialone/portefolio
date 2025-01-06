import React from 'react';
import { Box, VStack, Image, Text, useColorModeValue } from '@chakra-ui/react';

export function MyBrand() {
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const bgColor = useColorModeValue('blue.50', 'blue.900');

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="md"
      shadow="lg"
      borderWidth="1px"
      borderColor={useColorModeValue('blue.200', 'blue.700')}
      textAlign="center"
    >
      <VStack spacing={4}>
        {/* Image de profil */}
        <Image
          src="/portefolio/images/profil2.png"
          alt="Profil"
          borderRadius="full"
          boxSize="150px" // Taille fixe et ajustée
          objectFit="cover"
          border="2px solid"
          borderColor={useColorModeValue('blue.400', 'blue.600')}
        />

        {/* Texte descriptif */}
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          25 ans d'expérience dans la relation client
        </Text>
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          15 ans de management
        </Text>
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          Développeur en début de carrière
        </Text>
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          Passionné par le sport et ses valeurs
        </Text>
      </VStack>
    </Box>
  );
}
