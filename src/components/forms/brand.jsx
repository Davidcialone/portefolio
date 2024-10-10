import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <Navbar>
      <Container style={{ display: 'flex', alignItems: 'center', padding: '0' }}>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            alt=""
            src="images/profil.png"
            width="50%" // Ajustez la largeur selon vos besoins
            height="50%" // Ajustez la hauteur selon vos besoins
            style={{ margin: '1rem' }} // Espace entre l'image et le texte
          />
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>DAVID</span><br />
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>CIALONE</span>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BrandExample;