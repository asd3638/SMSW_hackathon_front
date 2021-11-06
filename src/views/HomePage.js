import React, { useState, useEffect } from "react";
import Header from "../components/Header";
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
  const [currentUser, setCurrentUser] = useState("hello");
  useEffect(() => {
    if (user !== undefined) {
      setCurrentUser(user);
    }
  }, [user]);
  return (
    <div>
      <Header />
      <StoreCard />
      <div>{currentUser.id}</div>
      <UseComplet show={true} />
      <Estimation show={true} />
      <CouponUse show={true} />
      <LoginConfirm show={true} />
      <LogoutConfirm show={true} />
    </div>
  );
}

export default HomePage;
