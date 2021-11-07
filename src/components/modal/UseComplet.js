import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.css";

function UseComplet({ show2 }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="modal_">
        <Modal
          size="sm"
          show={show2}
          onHide={handleClose}
          animation={false}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div style={{ fontSize: "25px", textAlign: "center" }}>
              <p>　</p>
              <p>사용이 완료되었습니다.</p>
              <p>　</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "block", margin: "auto" }}>
              <Button variant="outline-success" onClick={handleClose}>
                확인
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default UseComplet;
