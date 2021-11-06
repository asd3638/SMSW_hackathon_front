import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LoginModal from "./modal/LoginModal";
import instance from "../lib/api/instance";
import { useHistory } from "react-router";

function Header(props) {
  const user = useSelector((state) => state.user.userData);
  const token = localStorage.getItem("token");
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    if (user !== undefined) {
      setCurrentUser(user);
    }
  }, [user]);

  const showLoginModal = () => {
    setShow(true);
  };
  const closeLoginModal = () => {
    setShow(false);
  };
  const logout = async () => {
    const response = await instance
      .get(`/api/user/logout/${token}`)
      .then((response) => response.data);
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  const loginBtn = (
    <Nav.Link href="#" onClick={showLoginModal}>
      로그인
    </Nav.Link>
  );
  const logoutBtn = (
    <Nav.Link href="#" onClick={logout}>
      로그아웃
    </Nav.Link>
  );
  const check = (
    <NavDropdown.Item href="#action/3.4">드롭다운페이지4</NavDropdown.Item>
  );
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
              </NavDropdown>
            </Nav>
            <Nav>{currentUser ? logoutBtn : loginBtn}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={show} closeLoginModal={closeLoginModal} />
    </div>
  );
}

export default Header;
