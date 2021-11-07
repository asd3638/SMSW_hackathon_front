import React from "react";
import { Card } from "react-bootstrap";

function StoreDetail({ selectedStore }) {
  return (
    <div>
      클릭한 마커에 해당하는 가게 정보
      {selectedStore ? (
        <Card>
          <Card.Header as="h5">{selectedStore.name}</Card.Header>
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
