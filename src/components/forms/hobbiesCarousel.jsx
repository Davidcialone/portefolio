// src/components/forms/ProjectsCarousel.js
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NavbarSite } from './navbar';
import { Box, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Hobby1 } from './hobby1'; // Importation du hobby
import { Hobby2 } from './hobby2'; // Importation du hobby

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      icon={<ArrowForwardIcon />}
      position="absolute"
      top="50%"
      right="10px"
      transform="translate(0, -50%)"
      zIndex={1}
      onClick={onClick}
      aria-label="Next Slide"
    />
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      icon={<ArrowBackIcon />}
      position="absolute"
      top="50%"
      left="10px"
      transform="translate(0, -50%)"
      zIndex={1}
      onClick={onClick}
      aria-label="Previous Slide"
    />
  );
};

export function HobbiesCarousel() {
  const settings = {
    dots: true, // Affiche les points en bas
    infinite: false, // Désactiver le carousel infini si vous ne souhaitez pas répéter les éléments
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre d'éléments à afficher
    slidesToScroll: 1, // Nombre d'éléments à faire défiler
    arrows: true, // Afficher les flèches
    nextArrow: <NextArrow />, // Flèche suivante personnalisée
    prevArrow: <PrevArrow />, // Flèche précédente personnalisée
  };

  return (
    <Box width="full" display="flex" flexDirection="column" position="relative">
      <NavbarSite />
      <Box flex="1" overflow="hidden">
        {/* Le slider avec seulement un élément */}
        <Slider {...settings}>
          <Box padding={4}>
            <Hobby1 /> {/* N'affiche qu'une seule fois le Hobby1 */}
          </Box>
          <Box padding={4}>
            <Hobby2 /> {/* N'affiche qu'une seule fois le Hobby2 */}
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}
