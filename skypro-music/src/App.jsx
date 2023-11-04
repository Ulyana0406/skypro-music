//import React, { useState } from "react";
import "./App.css";
//import Cookies from "js-cookie";
import * as S from "./App.styles";
import GlobalStyle from "./globalStyles";
import { AppRoutes } from "./routes";
import { useEffect, useState } from "react";
//const S. = S..div``
function App() {
  //localStorage.setItem("user");
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <S.Wrapper>
      <AppRoutes setUser={setUser} user={user} />
      <GlobalStyle />
    </S.Wrapper>
  );
}

export default App;
