import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { Row, Col, Card } from "react-bootstrap";

function Coupon({ userSeq, storeSeq }) {
  const [couponList, setCouponList] = useState([]);
  const [store, setStore] = useState();

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await instance.get(`/api/map/${userSeq}/${storeSeq}`);
        setStore(response.data.store); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    const fetchCouponList = async () => {
      try {
        const response = await instance.get(`/api/map/${userSeq}/${storeSeq}`);
        setCouponList(response.data.coupon); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchStore();
    fetchCouponList();
  }, []);
  return (
    <div>
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
