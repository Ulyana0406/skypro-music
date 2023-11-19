//import React, { useState } from "react";
import "./App.css";
//import Cookies from "js-cookie";
import * as S from "./App.styles";
import GlobalStyle from "./globalStyles";
import { AppRoutes } from "./routes";
import { useState } from "react";
//const S. = S..div``

function App() {
  //localStorage.setItem("user");
  const [isLoading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [volume, setVolume] = useState(0.4);
  return (
    <S.Wrapper>
      <AppRoutes
        isLoading={isLoading}
        setLoading={setLoading}
        setUser={setUser}
        user={user}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        volume={volume}
        setVolume={setVolume}
      />
      <GlobalStyle />
    </S.Wrapper>
  );
}

export default App;
