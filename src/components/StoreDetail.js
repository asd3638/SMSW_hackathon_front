import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import img from "../asset/image/BR2.PNG";
import coffee from "../asset/image/coffee.png";
import heart50 from "../asset/image/heart50.png";
import history from "../asset/image/history.png";
import diet from "../asset/image/diet.png";
import back from "../asset/image/coupon.jpg";
import back2 from "../asset/image/img.jpg";

function StoreDetail({ selectedStore }) {
  return (
    <div>
      클릭한 마커에 해당하는 가게 정보
      {selectedStore ? (
        <Card className="bg-dark text-white" style={{}}>
          <Card.Img
            src={img}
            alt="Card image"
            style={
              {
                // marginLeft: "2rem",
                // marginRight: "2rem",
                // marginTop: "15px",
                // height: "280px",
                // wordBreak: "break-all",
                // padding: "10px",
              }
            }
          />
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
