//import React, { useState } from "react";
import "./App.css";
//import Cookies from "js-cookie";
import * as S from "./App.styles";
import GlobalStyle from "./globalStyles";
import { AppRoutes } from "./routes";
import { useEffect } from "react";
//const S. = S..div``
function App() {
  //localStorage.setItem("user");

  useEffect(() => {
    localStorage.setItem("user", "1234");
  }, []);
  const user = localStorage.getItem("user");
  return (
    <S.Wrapper>
      <AppRoutes user={user} />
      <GlobalStyle />
    </S.Wrapper>
  );
}

export default App;
