import React from "react";
import { Container } from "react-bootstrap";

function Hello({ currentUser }) {
  console.log(currentUser);
  return (
    <Container>
      안녕하세요!! {currentUser.nickname}송이!!!!숙명의 자랑 다양한 맛집과
      특색있는 가게들을 찾아보세요!
    </Container>
  );
}

export default Hello;
