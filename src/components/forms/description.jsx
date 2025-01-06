import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  Divider, 
  useColorModeValue, 
  Icon 
} from '@chakra-ui/react';
import { FaLightbulb, FaMapMarkerAlt, FaCog, FaUsers } from 'react-icons/fa';

export function Description() {
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const accentColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Box
      bg={bgColor}
      p={8}
      borderRadius="lg"
      shadow="2xl"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <VStack spacing={6} align="flex-start">
        {/* Titre principal */}
        <Heading as="h2" size="lg" color={accentColor}>
          À propos de moi
        </Heading>
        
        {/* Divider */}
        <Divider borderColor={accentColor} />

        {/* Section 1 */}
        <Box display="flex" alignItems="center">
          <Icon as={FaUsers} boxSize={6} color={accentColor} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={textColor}>
            Fort d'une solide expérience en <Text as="span" fontWeight="bold">management </Text>  
            et en <Text as="span" fontWeight="bold">gestion de la relation client</Text>, 
            j'ai su développer une approche axée sur l'efficacité et la performance.
          </Text>
        </Box>

        {/* Section 2 */}
        <Box display="flex" alignItems="center">
          <Icon as={FaCog} boxSize={6} color={accentColor} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={textColor}>
            En complément de mes compétences managériales, j'ai acquis des connaissances en <Text as="span" fontWeight="bold">développement</Text>, 
            me permettant de concevoir des solutions adaptées aux défis techniques que vous pourriez rencontrer.
          </Text>
        </Box>

        {/* Section 3 */}
        <Box display="flex" alignItems="center">
          <Icon as={FaLightbulb} boxSize={6} color={accentColor} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={textColor}>
            Organisé, rigoureux et à l'écoute, je mets mes compétences en <Text as="span" fontWeight="bold">management</Text> 
             et en <Text as="span" fontWeight="bold">développement</Text> au service de vos objectifs stratégiques, 
            apportant ainsi une réelle plus-value à vos projets.
          </Text>
        </Box>

        {/* Section 4 */}
        <Box display="flex" alignItems="center">
          <Icon as={FaMapMarkerAlt} boxSize={6} color={accentColor} mr={4} />
          <Text fontSize="md" lineHeight="1.8" color={textColor}>
            Basé à <Text as="span" fontWeight="bold">Lyon</Text> et ses environs, je suis prêt à relever vos défis 
            et à contribuer au succès de votre entreprise.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
