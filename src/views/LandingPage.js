import React from "react";
import { Container } from "react-bootstrap";
import GoogleLoginImg from "../asset/image/google_login.svg";
import KakaoLoginImg from "../asset/image/kakao_login.svg";

function LoginModal() {
  return (
    <div
      className="login_btn"
      style={{ textAlign: "center", height: "380px", marginTop: "380px" }}
    >
      <a href="http://localhost:8080/auth/google">
        <img src={GoogleLoginImg} alt="googleImg" className="google" />
      </a>
    </div>
  );
}

export default LoginModal;
