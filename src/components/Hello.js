import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import img from "../asset/image/BR2.PNG";
import coffee from "../asset/image/coffee.png";
import heart50 from "../asset/image/heart50.png";
import history from "../asset/image/history.png";
import diet from "../asset/image/diet.png";
import back from "../asset/image/coupon.jpg";
import back2 from "../asset/image/img.jpg";

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
    // <Card className="bg-dark text-white" style={{}}>
    //   <Card.Img
    //     src={img}
    //     alt="Card image"
    //     style={
    //       {
    //         // marginLeft: "2rem",
    //         // marginRight: "2rem",
    //         // marginTop: "15px",
    //         // height: "280px",
    //         // wordBreak: "break-all",
    //         // padding: "10px",
    //       }
    //     }
    //   />
    //   <Card.ImgOverlay>
    //     <Card.Title>
    //       <div style={{ fontSize: "4vw", fontWeight: "bold" }}>
    //         베스킨 라빈스
    //       </div>
    //     </Card.Title>
    //     <div
    //       style={{ width: "400px", marginTop: "30px", marginBottom: "30px" }}
    //     >
    //       <Container>
    //         <Row>
    //           <Col>
    //             <Card.Img src={coffee} />
    //           </Col>
    //           <Col>
    //             <Card.Img src={heart50} />
    //           </Col>
    //           <Col>
    //             <Card.Img src={history} />
    //           </Col>
    //           <Col>
    //             <Card.Img src={diet} />
    //           </Col>
    //           <Col>
    //             <Card.Img src={null} />
    //           </Col>
    //           <Col>
    //             <Card.Img src={null} />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //     <Card.Text>아이스크림</Card.Text>
    //   </Card.ImgOverlay>
    // </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img
        src={back}
        //     alt="Card image"
        //     style={
        //       {
        //         // marginLeft: "2rem",
        //         // marginRight: "2rem",
        //         // marginTop: "15px",
        //         // height: "280px",
        //         // wordBreak: "break-all",
        //         // padding: "10px",
        //       }
        //     }
      />
      <Card.ImgOverlay>
        <Card.Body style={{ opacity: "0.9" }}>
          <Card>
            <Card.Img
              src={back2}
              //     alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Body
                style={{
                  textAlign: "center",
                }}
              >
                <Card.Title style={{ fontWeight: "bold" }}>
                  베스킨 라빈스
                </Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>
                  <div style={{ fontSize: "1rem" }}>제공내역</div>
                  <div style={{ fontSize: "2rem" }}>1+1</div>
                </Card.Text>
                <Card.Text>
                  <div style={{ fontSize: "1rem", color: "red" }}>유효기한</div>
                  <div style={{ fontSize: "1.2rem" }}>~2021.11.08</div>
                </Card.Text>
                <div
                  style={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                    marginTop: "2px",
                  }}
                >
                  <Button variant="warning" size="lg">
                    쿠폰 확인
                  </Button>
                </div>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Hello;
