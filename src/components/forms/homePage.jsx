import React from 'react';
import { NavbarSite } from './navbar';
import Description from './description';
import Skills from './skills';
import MyBrand from './brand';
import { Contact } from './contact';
import { Grid, GridItem, Box, Heading, Stack } from '@chakra-ui/react';


function HomePage() {
  const bgColor = "gray.100";
  return (
    <Grid
      templateAreas={`
        "header header"
        "nav main"
        "nav footer"
      `}
      gridTemplateRows={'auto 1fr auto'} // Header and footer adjust to content, main takes remaining space
      gridTemplateColumns={'12rem 1fr'}  // 12rem for sidebar nav, 1fr for main content
      gap="4"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      {/* Header */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)"
        bg= {bgColor}
        area={'header'}
      >
        <Box>
          <NavbarSite /> {/* Navbar will adapt to the GridItem size */}
        </Box>
      </GridItem>

      {/* Sidebar (Brand or Nav) */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)" bg={bgColor} area={'nav'}>
      <Box  bg="white" p={4} shadow="lg" borderRadius="md" margin={2}>
          {/* Here you can put your brand or any navigation */}
          <Heading size="md">DAVID CIALONE</Heading>
          <MyBrand/>
        </Box>
      </GridItem>

      {/* Main Content */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)"bg={bgColor} area={'main'}>
        {/* Stack allows vertical stacking of elements with spacing */}
        <Stack spacing={8}>
          {/* Block 2: Description */}
          <Box  bg="white" p={4} shadow="lg" borderRadius="md" margin={2}>
            <Heading size="lg">A propos de moi</Heading>
            <Description />  {/* Your description component */}
          </Box>

          {/* Block 3: Skills */}
          <Box bg="white" p={4} shadow="lg" borderRadius="md" margin={2}>
            <Heading size="lg">Mes compétences</Heading>
            <Skills />  {/* Your skills component */}
          </Box>
        </Stack>
      </GridItem>

      {/* Footer */}
      <GridItem boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)"bg={bgColor} area={'footer'}>
      <Box bg="white" p={4} shadow="lg" borderRadius="md" margin={2}>
      <Heading size="md">Contact</Heading>
        <Contact/>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
