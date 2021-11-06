import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UseComplet from "./UseComplet";

function CouponUse() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showUseComplet = () => {
    setShow(false);
    setShow2(true);
    // <UseComplet />;
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        쿠폰 사용
      </Button>

      <div class="modal_">
        <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          animation={false}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              <p></p>
              <p>선다래</p>
            </div>
            <div
              style={{
                fontSize: "30px",
              }}
            >
              <p>1000원 할인</p>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              <p>　</p>
              <p>쿠폰 사용 가능 기간</p>
            </div>
            <div
              style={{ fontSize: "25px", textAlign: "left", color: "#FF4848" }}
            >
              <p>　~ 2021.11.8</p>
              <Button
                size="lg"
                variant="success"
                type="submit"
                onClick={showUseComplet}
              >
                사용하기
              </Button>
              {"  "}
              <Button
                size="lg"
                variant="outline-secondary"
                onClick={handleClose}
              >
                닫기
              </Button>
              <p>　</p>
            </div>
          </Modal.Body>
        </Modal>
        <UseComplet show2={show2} />
      </div>
    </>
  );
}

export default CouponUse;
