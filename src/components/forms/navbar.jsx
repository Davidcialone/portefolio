import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import BrandExample from './brand';

const navbarBackground = 'linear-gradient(to right, #A0C1DB 70%, #C2D7E8)'; // Dégradé similaire

export function NavbarSite() {
  return (
    <Navbar 
      expand="lg" 
      style={{ 
        background: navbarBackground, 
        border: '2px solid #ffffff', 
        borderRadius: '8px' 
      }} 
    >
      <BrandExample/>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-text">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/projects-carousel" className="nav-text">Projets</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="nav-text">Mes passions</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/david-cialone-6a5a627b/" target="_blank" rel="noopener noreferrer" className="nav-text">
              Profil LinkedIn
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-text">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
