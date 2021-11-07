import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import instance from "../lib/api/instance";
import StoreDetail from "../components/StoreDetail";
import Symbol from "../components/Symbol";
function StorePage() {
  const user = useSelector((state) => state.user.userData);
  const [storeList, setStoreList] = useState([]);
  const [symbolList, setSymbolList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };
    const fetchStoreList = async () => {
      try {
        const response = await instance
          .get(`/api/store/${currentUser.id}`)
          .then((response) => {
            return response.data.store;
          });
        setStoreList(response); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    const fetchSymbolList = async () => {
      try {
        const response = await instance.get(`/api/symbol`).then((response) => {
          return response.data;
        });
        setSymbolList(response); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchStoreList();
    fetchSymbolList();
    load();
  }, [user]);

  return (
    <Container>
      <Symbol />
      {storeList.map((store, idx) => (
        <StoreDetail selectedStore={store} />
      ))}
    </Container>
  );
}

export default StorePage;
