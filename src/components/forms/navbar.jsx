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

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Portefolio
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              {/* Remplacez les boutons par des liens */}
              <Link to="/">
                <Button variant="ghost">Accueil</Button>
              </Link>
              <Link to="/portefolio/projects">
                <Button variant="ghost">Projets</Button>
              </Link>
              <Link to="/portefolio/hobbies">
                <Button variant="ghost">Passions</Button>
              </Link>
              <Link to="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank">
                <Button variant="ghost">Linkedin</Button>
              </Link>
              <Link to="/portefolio/contact">
                <Button variant="ghost">Contact</Button>
              </Link>
            </HStack>
              <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
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
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
  
                {/* Utilisez les liens dans le menu mobile également */}
                <Link to="/projects">
                  <Button w="full" variant="ghost">Projets</Button>
                </Link>
                <Link to="/hobbies">
                  <Button w="full" variant="ghost">Passions</Button>
                </Link>
                <Link to="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank">
                  <Button w="full" variant="ghost">Linkedin</Button>
                </Link>
                <Link to="/contact">
                  <Button w="full" variant="ghost">Contact</Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
};