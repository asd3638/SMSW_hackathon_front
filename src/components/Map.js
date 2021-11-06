import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import instance from "../lib/api/instance";

function MapComp(props) {
  const [store, setStore] = useState([]);
  const mapStyles = {
    width: "80%",
    height: "80%",
    marginLeft: "10%",
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
    <div>
      제휴 가게 보기
      <br />
      학교와 제휴를 맺은 가게들을 확인해보세요
      <br />
      마커를 클릭하면 가게 정보와 보유한 쿠폰 목록을 확인하실 수 있습니다.
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
      </Map>{" "}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6Sntr-hkTc1_tSXPgS52it7_bNLGdpVw",
})(MapComp);
