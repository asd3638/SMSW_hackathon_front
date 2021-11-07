import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { useSelector } from "react-redux";
import { Row, Card, Container, Col, Button } from "react-bootstrap";
import img from "../asset/image/BR2.PNG";
import coffee from "../asset/image/coffee.png";
import heart50 from "../asset/image/heart50.png";
import history from "../asset/image/history.png";
import diet from "../asset/image/diet.png";
import back from "../asset/image/coupon.jpg";
import back2 from "../asset/image/img.jpg";
function Coupon({ user, selectedStore }) {
  const [couponList, setCouponList] = useState([]);
  console.log("Hello" + user);
  useEffect(() => {
    const fetchCouponList = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${user.id}/${selectedStore.id}`
        );
        setCouponList(response.data.coupon); // 데이터는 response.data 안에 들어있습니다.
        console.log(couponList);
      } catch (e) {}
    };
    fetchCouponList();
  }, [selectedStore]);
  return (
    <div>
      클릭한 마커에 해당하는 쿠폰 정보 시발
      <Row xs={1} md={2} className="g-4">
        {couponList.map((coupon, idx) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={back} />
            <Card.ImgOverlay>
              <Card.Body style={{ opacity: "0.9" }}>
                <Card>
                  <Card.Img src={back2} />
                  <Card.ImgOverlay>
                    <Card.Body
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {selectedStore.name}
                      </Card.Title>
                      <Card.Text></Card.Text>
                      <Card.Text>
                        <div style={{ fontSize: "1rem" }}>제공내역</div>
                        <div style={{ fontSize: "2rem" }}>{coupon.content}</div>
                      </Card.Text>
                      <Card.Text>
                        <div style={{ fontSize: "1rem", color: "red" }}>
                          유효기한
                        </div>
                        <div style={{ fontSize: "1.2rem" }}>
                          {coupon.end_date}
                        </div>
                      </Card.Text>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          textAlign: "center",
                          marginTop: "2px",
                        }}
                      >
                        <Button variant="warning" size="lg">
                          쿠폰 확인
                        </Button>
                      </div>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Coupon;
