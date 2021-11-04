import instance from "../lib/api/instance";
import { AUTH_USER } from "./types";

function auth() {
  //최초로 로그인 시도한 경오
  //로그인 안 한 유저가 접속 한 경우
  const request = instance
    .get("/api/auth/user", localStorage.getItem("token"))
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export default auth;
