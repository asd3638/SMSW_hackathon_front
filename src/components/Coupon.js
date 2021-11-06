import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { Row, Col, Card } from "react-bootstrap";

function Coupon({ user, store }) {
  const [couponList, setCouponList] = useState([]);
  console.log(user);
  console.log(store);
  useEffect(() => {
    const fetchCouponList = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${user.id}/${store.id}`
        );
        setCouponList(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchCouponList();
  }, []);
  return (
    <div>
      Hello
      <Row xs={1} md={2} className="g-4">
        {couponList.map((coupon, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{store.name}</Card.Title>
                <Card.Text>
                  유효기간
                  <br />
                  {coupon.end_date}
                </Card.Text>
                <Card.Text>
                  쿠폰내용
                  <br />
                  {coupon.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Coupon;
