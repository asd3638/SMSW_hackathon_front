import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import instance from "../lib/api/instance";

function Header(props) {
  const user = useSelector((state) => state.user.userData);
  const token = localStorage.getItem("token");

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    if (user !== undefined) {
      setCurrentUser(user);
    }
  }, [user]);
  const logout = async () => {
    const response = await instance
      .get(`/api/user/logout/${token}`)
      .then((response) => response.data);
    localStorage.removeItem("token");
    window.location.replace("/login");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">숙명</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">마이페이지</Nav.Link>
              <Nav.Link href="#pricing">위드숙명</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" onClick={logout}>
                로그아웃
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
