import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import instance from "../lib/api/instance";
import { Container, Row, Col } from "react-bootstrap";

import StoreDetail from "./StoreDetail";
import Coupon from "./Coupon";

function MapComp(props) {
  const [store, setStore] = useState([]);
  const mapStyles = {
    width: "80%",
    height: "80%",
    border: "solid",
  };

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await instance.get("/api/store");
        setStore(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchStore();
    console.log(store);
  }, []);

  const markerClickEvent = (e) => {
    console.log(e);
  };
  return (
    <Container>
      <Row>
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
                  name={value.name}
                  icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                />
              );
            })}
          </Map>
        </Col>
      </Row>
      <Row>
        <Col>
          <StoreDetail />
        </Col>
      </Row>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6Sntr-hkTc1_tSXPgS52it7_bNLGdpVw",
})(MapComp);
