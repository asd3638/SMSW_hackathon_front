import instance from "../lib/api/instance";
import { AUTH_USER } from "./types";

function Auth(accessToken) {
  // state selector로 userData 받아와서 get 보내기
  if (accessToken) {
    const request = instance
      .get(`/api/user/${accessToken}`)
      .then((response) => response.data);
    console.log(request);
    return {
      type: AUTH_USER,
      payload: request,
    };
  }
  return {
    type: null,
    payload: null,
  };
}

export default Auth;
