import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images\20220423_150502-PhotoRoom (1).jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Mon portefolio
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;