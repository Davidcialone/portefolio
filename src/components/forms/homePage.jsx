import React from 'react';
import { NavbarSite } from './navbar';
import { Description } from './description';
import { Skills } from './skills';
import { MyBrand } from './brand';
import { ContactFooter } from './contactFooter';
import { Grid, GridItem, Box, Heading, Stack } from '@chakra-ui/react';

function HomePage() {
  const bgColor = "gray.100";
  return (
    <Grid
    templateAreas={{
      base: `
      "header header header header" 
      "nav nav nav nav"
      "main main main main" 
      "footer footer footer footer"`, 
      sm: `
      "header header header header"
      "nav nav nav nav"
      "main main main main"
      "footer footer footer footer"`,
      md: `
      "header header header header" 
      "nav nav nav nav"
      "main main main main" 
      "footer footer footer footer"`,  
      lg: `
      "header header header header"
      "nav main main main"
      "footer footer footer footer"`, 
        }}
    gridTemplateRows="auto 1fr auto" // Pour toutes les tailles d'écran (à moins d'être redéfini dans un point de rupture)
    gridTemplateColumns={{
      base: '1fr',  // Sur les petits écrans (jusqu'à 600px), la sidebar prend toute la largeur
      sm: '1fr',    // Même comportement pour les écrans entre 600px et 768px
      md: '12rem 1fr',  // Sur les écrans moyens (≥ 768px), la sidebar prend 12rem et le contenu 1fr
      lg: '12rem 1fr',  // Sur les grands écrans (≥ 1024px), la sidebar prend 12rem et le contenu 1fr
    }}
    >
      {/* Header */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)"
        bg={bgColor}
        area={'header'}
      >
        <Box>
          <NavbarSite /> {/* Navbar will adapt to the GridItem size */}
        </Box>
      </GridItem>

      {/* Sidebar (Brand or Nav) */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)" bg={bgColor} area={'nav'}>
        <Box bg="white" p={2} shadow="lg" borderRadius="md" >
          <MyBrand />
        </Box>
      </GridItem>

      {/* Main Content */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)" bg={bgColor} area={'main'}>
        {/* Stack allows vertical stacking of elements with spacing */}
        <Stack spacing={8}>
          {/* Block 2: Description */}
          <Box bg="white" p={2} shadow="lg" borderRadius="md" margin={2}>
            <Heading size="lg">A propos de moi</Heading>
            <Description />  {/* Your description component */}
          </Box>

          {/* Block 3: Skills */}
          <Box bg="white" p={2} shadow="lg" borderRadius="md" margin={2}>
            <Skills />  {/* Your skills component */}
          </Box>
        </Stack>
      </GridItem>

      {/* Footer */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)" bg={bgColor} area={'footer'}>
        <Box bg="white" p={2} shadow="lg" borderRadius="md" margin={2}>
          <Heading size="md">Contact</Heading>
          <ContactFooter />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
