/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    // 여기선 막아서 다른 페이지로 들어가게 한다.
    useEffect(() => {
      // 서버에 요청 보내서 지금 페이지에 들어가려는 사람의 로그인 정보나 role등을 확인할 수 있다.
      dispatch(auth(props)).then((response) => {
        console.log(response);
        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          // 로그인 안 했는데 로그인 해야 들어갈 수 있는 페이지에 접근한 경우
          if (option) {
            props.history.push("/");
          }
        } else {
          //로그인 한 상태
          //admin 페이지에 들어가려고 하는데
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) props.history.push("/");
          }
        }
      });
    }, [dispatch, props.history]);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
