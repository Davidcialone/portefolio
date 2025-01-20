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
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export function NavbarSite() {
  // Nouvelle palette de couleurs
  const colors = {
    primary: useColorModeValue("teal.700", "teal.300"),
    secondary: useColorModeValue("purple.500", "purple.300"),
    background: useColorModeValue("gray.50", "gray.900"),
    text: useColorModeValue("gray.800", "gray.100"),
    border: useColorModeValue("teal.400", "teal.700"),
    badge: useColorModeValue("teal.300", "teal.800"),
  };

  const mobileNav = useDisclosure();

  // Styles des boutons avec la nouvelle palette
  const buttonStyles = {
    border: '2px solid',
    borderColor: colors.primary, // Utilisation de la couleur principale
    bg: 'transparent',
    color: colors.text, // Couleur du texte
    fontWeight: 'bold',
    fontSize: { base: 'sm', md: 'md', lg: 'lg' },
    padding: { base: 2, md: 3 },
    _hover: {
      bg: colors.primary, // Couleur principale au survol
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: 'lg',
    },
    _focus: {
      boxShadow: 'outline',
    },
  };

  return (
    <React.Fragment>
      <chakra.header bg={colors.background} w="full" px={4} py={3} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto" maxW="1200px">
          {/* Logo / Brand */}
          <Flex alignItems="center">
            <chakra.a href="/" display="flex" alignItems="center">
              <VisuallyHidden>Accueil</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="2xl" fontWeight="bold" color={colors.text} ml={3}>
              <Link to="/" style={{ textDecoration: 'none', color: colors.text }}>
                David CIALONE
              </Link>
            </chakra.h1>
          </Flex>

          {/* Desktop Navigation */}
          <HStack
            spacing={6}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            <Link to="/portefolio/projects">
              <Button {...buttonStyles}>Projets</Button>
            </Link>
            <Link to="/portefolio/hobbies">
              <Button {...buttonStyles}>Passions</Button>
            </Link>
            <Link to="https://www.linkedin.com/in/david-cialone-6a5a627b" target="_blank">
              <Button {...buttonStyles}>LinkedIn</Button>
            </Link>
            <Link to="/portefolio/contact">
              <Button {...buttonStyles}>Contact</Button>
            </Link>
          </HStack>

          {/* Mobile Navigation Toggle */}
          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <IconButton
              icon={<AiOutlineMenu />}
              aria-label="Open menu"
              variant="ghost"
              fontSize="2xl"
              color={colors.text} // Couleur du texte
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>

        {/* Mobile Navigation Menu */}
        {mobileNav.isOpen && (
          <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bg={colors.background} // Arrière-plan
            zIndex={10}
            shadow="lg"
            spacing={4}
            p={4}
          >
            <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
            <Link to="/portefolio/projects" onClick={mobileNav.onClose}>
              <Button w="full" {...buttonStyles}>
                Projets
              </Button>
            </Link>
            <Link to="/portefolio/hobbies" onClick={mobileNav.onClose}>
              <Button w="full" {...buttonStyles}>
                Passions
              </Button>
            </Link>
            <Link
              to="https://www.linkedin.com/in/david-cialone-6a5a627b"
              target="_blank"
              onClick={mobileNav.onClose}
            >
              <Button w="full" {...buttonStyles}>
                LinkedIn
              </Button>
            </Link>
            <Link to="/portefolio/contact" onClick={mobileNav.onClose}>
              <Button w="full" {...buttonStyles}>
                Contact
              </Button>
            </Link>
          </VStack>
        )}
      </chakra.header>
    </React.Fragment>
  );
}