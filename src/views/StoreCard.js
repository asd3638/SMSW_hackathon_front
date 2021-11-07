import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CouponUse from "../components/modal/CouponUse";

function StoreCard() {
  return (
    <div>
      <Row xs={1} md={4}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                style={{ height: "10rem", objectFit: "cover" }}
                variant="top"
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190524_135%2F1558675273006o079S_JPEG%2Fx5HXOdFxSK5K8dxGzTTqNKNt.jpg/50px160"
              />
              <Card.Body>
                <Card.Title>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    <p></p>
                    <p>선다래</p>
                  </div>
                </Card.Title>
                <Card.Text>
                  <div
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    <p></p>
                    <p>1000원 할인</p>
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      textAlign: "left",
                      color: "#FF4848",
                    }}
                  >
                    <p>~ 2021.11.8</p>
                  </div>
                  <div style={{ display: "block", margin: "auto" }}>
                    <CouponUse />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StoreCard;
