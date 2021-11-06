import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Map from "../components/Map";
import StoreDetail from "../components/StoreDetail";
import Coupon from "../components/Coupon";
import { useSelector } from "react-redux";

function HomePage() {
  //const user = useSelector((state) => state.user.userData);
  const user = useSelector((state) => state.user.userData);
  const [currentUser, setCurrentUser] = useState("hello");
  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };
    load();
  }, [user]);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Hello currentUser={currentUser} />
      <Map currentUser={currentUser} />
    </div>
  );
}

export default HomePage;
