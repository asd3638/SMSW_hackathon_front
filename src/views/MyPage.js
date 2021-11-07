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
} from "react-bootstrap";

function MyPage() {
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
      <Form>
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
      </Form>
    </div>
  );
}

export default MyPage;
