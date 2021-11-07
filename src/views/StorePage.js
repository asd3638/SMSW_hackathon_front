import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import instance from "../lib/api/instance";
import StoreDetail from "../components/StoreDetail";
import Header from "../components/Header";
function StorePage() {
  const user = useSelector((state) => state.user.userData);
  const [storeList, setStoreList] = useState([]);
  const [symbolList, setSymbolList] = useState([]);
  const [clickedSymbolList, setClickedSymbolList] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  const list = [1, 2, 3];
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
  const symbolClick = (symbol_type) => {
    const searchSymbolList = async () => {
      try {
        console.log(symbol_type);
        const response = await instance
          .post(`/api/symbol`, { symbol_type })
          .then((res) => {
            console.log(res.data);
            return res.data;
          });
        setStoreList(response);
      } catch (e) {}
    };
    searchSymbolList();
  };

  return (
    <div>
      <Header />
      <Container>
        {symbolList.map((symbol, idx) => (
          <Row>
            <Col
              onClick={() => {
                symbolClick(symbol.symbol_type);
              }}
            >
              a
            </Col>
            <Col>bbbbbbbbbbbbbb</Col>
          </Row>
        ))}
        {storeList.map((store, idx) => {
          return <StoreDetail selectedStore={store} />;
        })}
      </Container>
    </div>
  );
}

export default StorePage;
