import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Map from "../components/Map";
import StoreDetail from "../components/StoreDetail";
import Coupon from "../components/Coupon";

function HomePage() {
  //const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <Header />
      <Hello />
      {/* <div>{currentUser.nickname}</div> */}
      {/* map */}
      {/* <Map /> */}
      {/* store detail */}
      <StoreDetail userSeq={1} storeSeq={1} />
      <Coupon userSeq={1} storeSeq={1} />

      <div>{}</div>
      {/* coupon */}
    </div>
  );
}

export default HomePage;
