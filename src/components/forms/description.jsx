import React from 'react';
import { Box, Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react';

export function Description() {
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="md"
      shadow="lg"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <VStack spacing={4} align="flex-start">
        {/* Titre */}
        {/* <Heading as="h2" size="lg" color="blue.600">
          À propos de moi
        </Heading> */}

        {/* Texte descriptif */}
        <Text fontSize="md" lineHeight="1.8" color={textColor}>
          Fort d'une solide expérience en <Text as="span" fontWeight="bold">management</Text> et en <Text as="span" fontWeight="bold">gestion de la relation client</Text>, 
          j'ai su développer une approche axée sur l'efficacité et la performance.
        </Text>
        <Text fontSize="md" lineHeight="1.8" color={textColor}>
          En complément de mes compétences managériales, j'ai acquis des connaissances en <Text as="span" fontWeight="bold">développement</Text>, 
          me permettant de concevoir des solutions adaptées aux défis techniques que vous pourriez rencontrer.
        </Text>
        <Text fontSize="md" lineHeight="1.8" color={textColor}>
          Organisé, rigoureux et à l'écoute, je mets mes compétences en <Text as="span" fontWeight="bold">management</Text> 
          et en <Text as="span" fontWeight="bold">développement</Text> au service de vos objectifs stratégiques, apportant ainsi une réelle plus-value à vos projets.
        </Text>
        <Text fontSize="md" lineHeight="1.8" color={textColor}>
          Basé à <Text as="span" fontWeight="bold">Lyon</Text> et ses environs, je suis prêt à relever vos défis et à contribuer au succès de votre entreprise.
        </Text>
      </VStack>
    </Box>
  );
}
