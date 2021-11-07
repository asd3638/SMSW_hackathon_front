import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, Fade } from "react-bootstrap";
import img from "../asset/image/BR2.PNG";
import coffee from "../asset/image/coffee.png";
import heart50 from "../asset/image/heart50.png";
import history from "../asset/image/history.png";
import diet from "../asset/image/diet.png";

function StoreDetail({ selectedStore }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      클릭한 마커에 해당하는 가게 정보
      {selectedStore ? (
        <Card className="bg-dark text-white">
          <Card.Img src={img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>
              <div style={{ fontSize: "4vw", fontWeight: "bold" }}>
                {selectedStore.name}
              </div>
            </Card.Title>
            <div
              style={{
                width: "400px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <Card.Img
                      src={coffee}
                      onClick={() => setOpen(!open)}
                      aria-controls="example-fade-text"
                    />
                    <Fade in={open}>
                      <div id="example-fade-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Fade>
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
