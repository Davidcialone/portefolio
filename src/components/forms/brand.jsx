import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function MyBrand() {
  return (
    <Navbar>
      <Container style={{ display: 'flex', alignItems: 'center' }}>
      <Navbar.Brand href="/" style={{ backgroundColor: 'RGB(221, 240, 253)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            alt=""
            src="/portefolio/images/profil2.png"
            width="80%" // Ajustez la largeur selon vos besoins
            height="80%" // Ajustez la hauteur selon vos besoins
            style={{ margin: '1rem' }} // Espace entre l'image et le texte
          />
          <div style={{ textAlign: 'center',fontSize: '1rem', fontWeight: 'bold', margin: "1rem" }}>25 ans d'expérience dans la relation client</div>
          <div style={{ textAlign: 'center',fontSize: '1rem', fontWeight: 'bold',  margin: "1rem" }}>15 ans de management</div>
          <div style={{ textAlign: 'center',fontSize: '1rem', fontWeight: 'bold',  margin: "1rem" }}>Développeur en début de carrière</div>
          <div style={{ textAlign: 'center',fontSize: '1rem', fontWeight: 'bold',  margin: "1rem" }}>Passioné par le sport et ses valeurs</div>


        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

