import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LoginModal from "./LoginModal";
function Header() {
  const [show, setShow] = useState(false);

  const showLoginModal = () => {
    setShow(true);
  };
  const closeLoginModal = () => {
    setShow(false);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">sm-hackathon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">페이지1</Nav.Link>
              <Nav.Link href="#pricing">페이지2</Nav.Link>
              <NavDropdown title="드롭다운" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  드롭다운페이지1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  드롭다운페이지2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  드롭다운페이지3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  드롭다운페이지4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#" onClick={showLoginModal}>
                로그인
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={show} closeLoginModal={closeLoginModal} />
    </div>
  );
}

export default Header;
