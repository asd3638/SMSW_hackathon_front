import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { Row, Col, Card } from "react-bootstrap";

function Coupon({ user, selectedStore }) {
  const [couponList, setCouponList] = useState([]);

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
      클릭한 마커에 해당하는 쿠폰 정보
      <Row xs={1} md={2} className="g-4">
        {couponList.map((coupon, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{selectedStore.name}</Card.Title>
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
