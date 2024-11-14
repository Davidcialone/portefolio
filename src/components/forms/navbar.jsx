import React from 'react';
import { Link } from 'react-router-dom';
import { 
  chakra, 
  Flex, 
  Button, 
  HStack, 
  Box, 
  IconButton, 
  VStack, 
  CloseButton, 
  VisuallyHidden, 
  useDisclosure, 
  useColorModeValue 
} from '@chakra-ui/react'; // Ensure you're importing all Chakra components
import { AiOutlineMenu } from 'react-icons/ai'; // Import necessary icon


export function NavbarSite() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

// Créer une constante pour les styles des boutons
const buttonStyles = {
  // variant: "ghost",
  border: "2px solid",
  borderColor: "black.500",
  boxShadow: "lg",
  bg: "rgba(255, 255, 255, 0.8)", // Fond semi-transparent
  fontSize: "2xl", // Agrandir le texte
  fontWeight: "bold", // Rendre le texte plus épais
  transition: "transform 0.2s ease-in-out", // Transition pour un effet de zoom fluide
  _hover: {
    bg: "rgba(255, 255, 255, 0.9)",
    boxShadow: "xl",
    transform: "scale(1.30)", // Zoom de 5% lors du hover
  },
  _focus: {
    boxShadow: "outline",
  },
};

const backgroundColor = '#DFF2FF';

return (
  <React.Fragment>
    <chakra.header
      bg={bg}
      w="full"
      padding={2}
      borderRadius={8}
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto" backgroundColor={backgroundColor}>
        <Flex>
          <chakra.a href="/" title="Home Page" display="flex" alignItems="center">
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>
         
            <chakra.h1 fontSize="5xl" color={'black'} fontWeight="bold" padding={4} ml="5">
              David CIALONE
            </chakra.h1>
           
        </Flex>
        <HStack display="flex" alignItems="center" spacing={4}> {/* Plus d'espacement entre les boutons */}
          <HStack
            spacing={6} // Plus d'espacement entre chaque bouton
            mr={5}
            color="brand.500"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            {/* Application des styles buttonStyles */}
            <Link to="/">
              <Button {...buttonStyles}>Accueil</Button>
            </Link>
            <Link to="/portefolio/projects">
              <Button {...buttonStyles}>Projets</Button>
            </Link>
            <Link to="/portefolio/hobbies">
              <Button {...buttonStyles}>Passions</Button>
            </Link>
            <Link to="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank">
              <Button {...buttonStyles}>Linkedin</Button>
            </Link>
            <Link to="/portefolio/contact">
              <Button {...buttonStyles}>Contact</Button>
            </Link>
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{ color: "inherit" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

              {/* Menu mobile avec les mêmes styles */}
              <Link to="/projects">
                <Button w="full" {...buttonStyles}>Projets</Button>
              </Link>
              <Link to="/hobbies">
                <Button w="full" {...buttonStyles}>Passions</Button>
              </Link>
              <Link to="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank">
                <Button w="full" {...buttonStyles}>Linkedin</Button>
              </Link>
              <Link to="/contact">
                <Button w="full" {...buttonStyles}>Contact</Button>
              </Link>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  </React.Fragment>
);
}