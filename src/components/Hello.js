import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Hello() {
  const user = useSelector((state) => state.user.userData);
  const [currentUser, setCurrentUser] = useState("hello");
  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {
        console.log("sibal");
      }
    };
    load();
    console.log("Hello");
  }, [user]);
  return (
    <div>
      {currentUser.nickname} 송이 안녕하세요? 맛없는거 먹으면 짜증나는거 알죠?
    </div>
  );
}

export default Hello;
