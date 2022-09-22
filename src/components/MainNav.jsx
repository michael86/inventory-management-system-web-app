import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Nav.css";

const MainNav = () => {
  const { authenticated } = useSelector((state) => state.user);
  console.log(authenticated);
  return (
    <Navbar key="md" bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>CIMS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/about" className="me-2">
                About
              </Link>
              <Link to="/price-plane">Price Plan</Link>
            </Nav>

            {!authenticated ? (
              <Link to="login">
                <Button className="btn-sm">Sign In</Button>
              </Link>
            ) : (
              <p>user profile image</p>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainNav;
