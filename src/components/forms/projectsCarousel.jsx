// src/components/forms/ProjectsCarousel.js
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NavbarSite } from './navbar';
import { Box, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Project1 } from './project1';
import { Project2 } from './project2';
import { Project3 } from './project3';

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

export function ProjectsCarousel() {
  const settings = {
    dots: true, // Affiche les points en bas
    infinite: true, // Carousel infini
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre d'éléments à afficher
    slidesToScroll: 1, // Nombre d'éléments à faire défiler
    arrows: true, // Afficher les flèches
    nextArrow: <NextArrow />, // Flèche suivante personnalisée
    prevArrow: <PrevArrow />, // Flèche précédente personnalisée
  };

  return (
    <Box width="full"  display="flex" flexDirection="column" position="relative">
      <NavbarSite />
      <Box flex="1" overflow="hidden"> {/* Assurez-vous que le Slider occupe l'espace restant */}
        <Slider {...settings}>
          <Box padding={4}>
            <Project1 />
          </Box>
          <Box padding={4}>
            <Project2 />
          </Box>
          <Box padding={4}>
            <Project3 />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}


