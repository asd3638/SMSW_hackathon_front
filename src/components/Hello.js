import React from "react";
import { Container, Row } from "react-bootstrap";
function Hello({ currentUser }) {
  return (
    <div>
      <Container>
        <Row>
          {currentUser.nickname} 송이 안녕하세요? 맛없는거 먹으면 짜증나는거
          알죠?
        </Row>
      </Container>
    </div>
  );
}

export default Hello;
