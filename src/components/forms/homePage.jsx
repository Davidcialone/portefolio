import React from 'react';
import { NavbarSite } from './navbar';
import { Description } from './description';
import { Skills } from './skills';
import { MyBrand } from './brand';
import { ContactFooter } from './contactFooter';
import { Grid, GridItem, Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';

function HomePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.800'); // S'adapte au mode clair/sombre
  const cardBg = useColorModeValue('white', 'gray.700');
  const shadowEffect = "0 8px 20px rgba(0, 0, 0, 0.1)";

  return (
    <Grid
      templateAreas={{
        base: `
          "header"
          "main"
          "footer"`,
        md: `
          "header"
          "main"
          "footer"`,
        lg: `
          "header header"
          "nav main"
          "footer footer"`,
      }}
      gridTemplateRows="auto 1fr auto"
      gridTemplateColumns={{
        base: '1fr',
        lg: '15rem 1fr',
      }}
      minH="100vh"
      bg={bgColor}
    >
      {/* Header */}
      <GridItem area="header" boxShadow={shadowEffect} zIndex="1000">
        <NavbarSite />
      </GridItem>

      {/* Sidebar */}
      <GridItem
        area="nav"
        display={{ base: 'none', lg: 'block' }}
        bg={cardBg}
        p={4}
        shadow={shadowEffect}
        borderRadius="lg"
      >
        <MyBrand />
      </GridItem>

      {/* Main Content */}
      <GridItem area="main" p={{ base: 4, lg: 8 }}>
        <Stack spacing={6}>
          {/* About Me */}
          <Box bg={cardBg} p={6} shadow={shadowEffect} borderRadius="lg" _hover={{ transform: 'scale(1.02)', transition: 'all 0.3s' }}>
            <Heading size="lg" mb={4}>À propos de moi</Heading>
            <Description />
          </Box>

          {/* Skills */}
          <Box bg={cardBg} p={6} shadow={shadowEffect} borderRadius="lg" _hover={{ transform: 'scale(1.02)', transition: 'all 0.3s' }}>
            <Heading size="lg" mb={4}>Compétences</Heading>
            <Skills />
          </Box>
        </Stack>
      </GridItem>

      {/* Footer */}
      <GridItem area="footer" bg={cardBg} p={6} shadow={shadowEffect} borderRadius="lg" mt={6}>
        <Heading size="md" mb={4}>Contact</Heading>
        <ContactFooter />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
