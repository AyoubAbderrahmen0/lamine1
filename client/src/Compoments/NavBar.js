
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
     
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <FaGamepad className="me-2" size={30} />
        GameZone
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#link">Jeux</Nav.Link>
          <NavDropdown title="Support" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">À propos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

       
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          <Link to={"/register"} className="ms-1"><Button variant="outline-success">Register</Button></Link>
          <Link to={"/login"} className="ms-1"><Button variant="outline-success">Login</Button></Link>
          <Link to={"/error"} className="ms-1"><Button variant="outline-success">error</Button></Link>
          <Link to={"/Profil"} className="ms-1"><Button variant="outline-success">Profil</Button></Link>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
