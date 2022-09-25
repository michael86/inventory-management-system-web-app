import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Popup from "../features/popups/LoginRegister/Login-Register";
import { togglePopup } from "../features/popups/LoginRegister/Login-RegisterSlice";
import { setAuthenticated } from "../features/user/userSlice";

import "../styles/Nav.css";

function MainNav() {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.user);

  return (
    <>
      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            CIMS
          </Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className="ms-auto"
            ></Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className=" flex-grow-1 pe-3">
                {authenticated && (
                  <NavDropdown
                    title={<FontAwesomeIcon icon={faUser} />}
                    id="offcanvasNavbarDropdown-expand-md"
                    className="order-md-3 "
                  >
                    <Link to="account-settings" className="dropdown-item">
                      Settings
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="account-profile" className="dropdown-item">
                      Profile
                    </Link>
                    <NavDropdown.Divider />
                    <Link
                      to="/"
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(setAuthenticated());
                      }}
                    >
                      Log out
                    </Link>
                  </NavDropdown>
                )}

                <Nav.Item>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link to="/price-plans" className="nav-link">
                    Price Plans
                  </Link>
                </Nav.Item>

                {!authenticated && (
                  <Nav.Item className="ms-auto">
                    <Button
                      onClick={() => {
                        dispatch(togglePopup());
                      }}
                    >
                      Register/Login
                    </Button>
                  </Nav.Item>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Popup />;
    </>
  );
}

export default MainNav;
