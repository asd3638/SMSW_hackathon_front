import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import instance from "../lib/api/instance";
import { Container, Row, Col, Card } from "react-bootstrap";

import StoreDetail from "./StoreDetail";
import Coupon from "./Coupon";

function MapComp(props) {
  const [store, setStore] = useState([]);
  const [selectedStore, setSelectedStore] = useState();

  const mapStyles = {
    width: "80%",
    height: "80%",
    border: "solid",
  };

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await instance.get(
          `/api/store/${props.currentUser.id}`
        );
        setStore(response.data.store); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchStore();
  }, []);

  const markerClickEvent = (e) => {
    setSelectedStore(e.store);
  };

  return (
    <Container>
      <Row style={{ height: "600px" }}>
        <Col>
          <Map
            google={props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat: 37.54746, lng: 126.96458 }}
          >
            {store.map((value) => {
              return (
                <Marker
                  position={{ lat: value.lat, lng: value.lng }}
                  onClick={markerClickEvent}
                  store={value}
                  icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                />
              );
            })}
          </Map>
        </Col>
      </Row>
      <Row>
        <Col>
          {selectedStore ? <StoreDetail selectedStore={selectedStore} /> : null}
        </Col>
      </Row>
      <Row>
        <Col>
          {selectedStore ? (
            <Coupon user={props.currentUser} selectedStore={selectedStore} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6Sntr-hkTc1_tSXPgS52it7_bNLGdpVw",
})(MapComp);
