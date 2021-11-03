import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth(props) {
  console.log(
    "auth안" +
      props.location.search.substring(
        props.location.search.lastIndexOf("?"),
        props.location.search.lastIndexOf("/") + 1
      )
  );
  const request = axios
    .get("/api/users/register", props.location.search)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
