import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Hello from "../components/Hello";
import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Tabs,
  Tab,
  Container,
} from "react-bootstrap";
import instance from "../lib/api/instance";

function MyPage() {
  const user = useSelector((state) => state.user.userData);
  const [currentUser, setCurrentUser] = useState("hello");
  const [availCoup, setAvailCoup] = useState([]);
  const [expCoup, setExpCoup] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };
    const fetchAvailCoup = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${currentUser.id}/available`
        );
        setAvailCoup(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(availCoup);
      } catch (e) {}
    };
    const fetchExpCoup = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${currentUser.id}/expired`
        );
        setExpCoup(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(expCoup);
      } catch (e) {}
    };
    load();
    fetchAvailCoup();
    fetchExpCoup();
  }, [user]);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Hello currentUser={currentUser} />
      <Form>
        <Container>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                search
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i class="fas fa-search"></i>
                </InputGroup.Text>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="가게 정보를 입력해주세요"
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2" variant="dark">
                검색하기
              </Button>
            </Col>
          </Row>
          <Row
            xs={1}
            md={5}
            style={{
              marginLeft: "50px",
              marginTop: "50px",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            {availCoup.map((coup) => {
              return (
                <Col
                  style={{
                    marginBottom: "25px",
                    display: "flex",
                    width: "270px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* <CardView study={study} id={props.userId} isMyPage={true} /> */}
                  coup.id
                </Col>
              );
            })}
          </Row>
        </Container>
      </Form>
      <Container
        style={{
          width: "auto",
          display: "block",
          marginLeft: "50px",
          marginTop: "70px",
          marginRight: "50px",
          border: "none",
          textAlign: "center",
        }}
      >
        <Tabs
          defaultActiveKey="available"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ borderColor: "grey", width: "800px" }}
        >
          <Tab eventKey="available" title="사용 가능한 쿠폰">
            <Row
              xs={1}
              md={5}
              style={{
                marginLeft: "50px",
                marginTop: "50px",
                marginRight: "50px",
                marginBottom: "50px",
              }}
            >
              {availCoup.map((coup) => {
                return (
                  <Col
                    style={{
                      marginBottom: "25px",
                      display: "flex",
                      width: "270px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* <CardView
                      study={study}
                      id={props.userId}
                      isMyPage={props.isMyPage}
                      isHeart={true}
                    /> */}
                    coup.id
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="expired" title="사용 만료된 쿠폰">
            <Row
              xs={1}
              md={5}
              style={{
                marginLeft: "50px",
                marginTop: "50px",
                marginRight: "50px",
                marginBottom: "50px",
              }}
            >
              {expCoup.map((coup) => {
                return (
                  <Col
                    style={{
                      marginBottom: "25px",
                      display: "flex",
                      width: "270px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* <CardView study={study} id={props.userId} isMyPage={true} /> */}
                    coup.id
                  </Col>
                );
              })}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default MyPage;
