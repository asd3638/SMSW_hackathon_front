import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { Card } from "react-bootstrap";

function StoreDetail({ userSeq, storeSeq }) {
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
      {store ? (
        <Card>
          <Card.Header as="h5">{store.name}</Card.Header>
          <Card.Body>
            <Card.Title>symbol</Card.Title>
            <Card.Text>가게 정보</Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
}

export default StoreDetail;
