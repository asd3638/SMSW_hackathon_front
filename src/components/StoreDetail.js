import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { Card } from "react-bootstrap";

function StoreDetail({ userSeq, storeSeq }) {
  const [storeDetail, setStoreDetail] = useState();

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await instance.get(`/api/map/${userSeq}/${storeSeq}`);
        console.log(response);
        setStoreDetail(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchStore();
  }, []);
  return (
    <Card>
      <Card.Header as="h5">
        {storeDetail ? storeDetail.store.name : null}
      </Card.Header>
      <Card.Body>
        <Card.Title>symbol</Card.Title>
        <Card.Text>가게 정보</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StoreDetail;
