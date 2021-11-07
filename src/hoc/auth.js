/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Auth from "../_actions/user_action";
import HomePage from "../views/HomePage";

export default function (SpecificComponent, option, adminRoute = null) {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck(props) {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    console.log(token);

    useEffect(() => {
      if (!token) {
        console.log("error");
        return <HomePage />;
      }
      dispatch(Auth(token)).then((response) => {
        console.log("not error");
        console.log(response);
      });
    }, [dispatch, props.history]);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
