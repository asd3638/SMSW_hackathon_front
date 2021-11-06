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

    // 여기선 막아서 다른 페이지로 들어가게 한다.
    useEffect(() => {
      // 서버에 요청 보내서 지금 페이지에 들어가려는 사람의 로그인 정보나 role등을 확인할 수 있다.
      // 로그인 안하면 localStorage 에 token 이 없을테니까 그럼 홈으로 넘겨준다.
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
