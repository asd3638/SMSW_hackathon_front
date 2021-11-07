import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, Fade } from "react-bootstrap";
import heart50 from "../asset/image/heart50.png";
import history from "../asset/image/history.png";
import diet from "../asset/image/diet.png";
import coffee from "../asset/image/coffee.png";

function StoreDetail({ selectedStore }) {
  const [open, setOpen] = useState(false);
  var bg_name = selectedStore.img;
  var bg_src = `https://iljipractice.s3.ap-northeast-2.amazonaws.com/background/${bg_name}.png`;

  return (
    <div>
      클릭한 마커에 해당하는 가게 정보
      {selectedStore ? (
        <Card className="bg-dark text-white">
          <Card.Img src={bg_src} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>
              <div style={{ fontSize: "4vw", fontWeight: "bold" }}>
                {selectedStore.name}
              </div>
            </Card.Title>
            <div
              style={{
                width: "400px",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <Card.Img src={coffee} />
                  </Col>
                  <Col>
                    <Card.Img src={heart50} />
                  </Col>
                  <Col>
                    <Card.Img src={history} />
                  </Col>
                  <Col>
                    <Card.Img src={diet} />
                  </Col>
                  <Col>
                    <Card.Img src={null} />
                  </Col>
                  <Col>
                    <Card.Img src={null} />
                  </Col>
                </Row>
              </Container>
            </div>
            <Card.Text>{selectedStore.content}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ) : null}
    </div>
  );
}

export default StoreDetail;
