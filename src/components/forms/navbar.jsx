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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');
  const navShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  const linkHoverStyle = {
    transform: 'scale(1.05)',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
  };

  const navLinks = [
    { label: 'Projets', path: '/portefolio/projects' },
    { label: 'Passions', path: '/portefolio/hobbies' },
    { label: 'LinkedIn', path: 'https://www.linkedin.com/in/david-cialone-6a5a627b', isExternal: true },
    { label: 'Contact', path: '/portefolio/contact' },
  ];

  return (
    <chakra.header
      bg={bg}
      shadow={navShadow}
      w="full"
      position="sticky"
      top={0}
      zIndex="1000"
      px={4}
      py={2}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="1200px"
      >
        {/* Logo Section */}
        <Flex alignItems="center">
          <chakra.a href="/" title="Home Page" display="flex" alignItems="center">
            <VisuallyHidden>David Cialone</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="2xl" fontWeight="bold" ml="3" color="blue.600">
            <Link to="/">David CIALONE</Link>
          </chakra.h1>
        </Flex>

        {/* Desktop Menu */}
        <HStack
          spacing={8}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
        >
          {navLinks.map((link) => (
            <chakra.a
              href={link.path}
              key={link.label}
              isExternal={link.isExternal}
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.200')}
              fontWeight="medium"
              _hover={linkHoverStyle}
            >
              {link.label}
            </chakra.a>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <Box display={{ base: 'inline-flex', md: 'none' }}>
          <IconButton
            aria-label="Open Menu"
            icon={<AiOutlineMenu />}
            onClick={onOpen}
            fontSize="2xl"
            variant="ghost"
            colorScheme="blue"
          />
        </Box>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          pos="absolute"
          top={0}
          left={0}
          w="full"
          bg={bg}
          spacing={4}
          p={4}
          zIndex={20}
          shadow={navShadow}
        >
          <CloseButton aria-label="Close Menu" onClick={onClose} alignSelf="flex-end" />
          {navLinks.map((link) => (
            <Button
              as={link.isExternal ? 'a' : Link}
              href={link.path}
              key={link.label}
              w="full"
              colorScheme="blue"
              variant="ghost"
              _hover={linkHoverStyle}
              onClick={onClose}
            >
              {link.label}
            </Button>
          ))}
        </VStack>
      )}
    </chakra.header>
  );
}
