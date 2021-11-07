import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Symbol({ symbolList }) {
  return (
    <Container>
      {symbolList.map((symbol, idx) => (
        <Row>
          <Col style={{ width: "20px" }}>a</Col>
          <Col>bbbbbbbbbbbbbb</Col>
        </Row>
      ))}
    </Container>
  );
}

export default Symbol;
