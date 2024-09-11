import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export function NavbarSite() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            {/* Lien externe vers LinkedIn */}
            <Nav.Link href="https://www.linkedin.com/in/david-cialone-6a5a627b/" target="_blank" rel="noopener noreferrer">
              Profil LinkedIn
            </Nav.Link>
            <Nav.Link as={Link} to="/projects-carousel">Projets</Nav.Link>
            <Nav.Link as={Link} to="/hobbies">Mes passions</Nav.Link>
            <NavDropdown title="Projets" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/project1">Projet 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project2">Projet 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project3">Projet 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
