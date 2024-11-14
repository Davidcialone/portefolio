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

  const buttonStyles = {
    border: "2px solid",
    borderColor: "black.500",
    boxShadow: "lg",
    bg: "rgba(255, 255, 255, 0.8)",
    fontWeight: "bold",
    transition: "transform 0.2s ease-in-out",
    fontSize: { base: "md", md: "lg", lg: "xl" }, // Ajustement de la taille du texte selon la taille d'écran
    padding: { base: "1", md: "2" },              // Espacement interne ajusté par taille d’écran
    width: { base: "6rem", md: "8rem", lg: "10rem" }, // Largeur du bouton par taille d’écran
    height: { base: "1rem", md: "2rem", lg: "3rem" },   // Hauteur du bouton par taille d’écran
    _hover: {
      bg: "rgba(255, 255, 255, 0.9)",
      boxShadow: "xl",
      transform: "scale(1.05)", // Ajustement de l'effet de zoom
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
         
            <chakra.h1 fontSize="4xl" color={'black'} fontWeight="bold" padding={4} ml="5">
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              David CIALONE
              </Link>
            </chakra.h1>
           
        </Flex>
        <HStack display="flex" alignItems="center" spacing={4}> {/* Plus d'espacement entre les boutons */}
          <HStack
          width="{{80%}}"
            spacing={6} // Plus d'espacement entre chaque bouton
            mr={5}
            color="brand.500"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            {/* Application des styles buttonStyles */}
            {/* <Link to="/">
              <Button {...buttonStyles}>Accueil</Button>
            </Link> */}
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
              fontSize="2rem"
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
              <Link to="/portefolio/projects">
                <Button w="full" {...buttonStyles}>Projets</Button>
              </Link>
              <Link to="/portefolio/hobbies">
                <Button w="full" {...buttonStyles}>Passions</Button>
              </Link>
              <Link to="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank">
                <Button w="full" {...buttonStyles}>Linkedin</Button>
              </Link>
              <Link to="/portefolio/contact">
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