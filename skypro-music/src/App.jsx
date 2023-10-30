//import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import * as S from "./App.styles";
import GlobalStyle from "./globalStyles";
import { AppRoutes } from "./routes";
//const S. = S..div``
function App() {
  const token = Cookies.get("token");
  console.log(token);

  return (
    <S.Wrapper>
      <AppRoutes user={token} />
      <GlobalStyle />
    </S.Wrapper>
  );
}

export default App;
