import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Map from "../components/Map";
import { useSelector } from "react-redux";
import LoginModal from "../components/modal/LoginModal";
import UseComplet from "../components/modal/UseComplet";
import Estimation from "../components/modal/Estimation";
import CouponUse from "../components/modal/CouponUse";
import LoginConfirm from "../components/modal/LoginConfirm";
import LogoutConfirm from "../components/modal/LogoutConfirm";
import StoreCard from "./StoreCard";

function HomePage() {
  const user = useSelector((state) => state.user.userData);
  const [currentUser, setCurrentUser] = useState({});
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
