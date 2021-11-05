import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

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
      <div>Hello</div>
      <div>{currentUser.id}</div>
    </div>
  );
}

export default HomePage;
