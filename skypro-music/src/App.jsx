//import React, { useState } from "react";
import "./App.css";
//import Cookies from "js-cookie";
import * as S from "./App.styles";
import { WithAuth } from "./auth";
import GlobalStyle from "./globalStyles";
import { AppRoutes } from "./routes";
import { useState } from "react";
import { useContext, createContext } from "react";
import { useSelector } from "react-redux";
// import { AudioPlayer } from "./components/AudiopPayer/AudioPlayer";
import { ReduxProvider } from "./store/provider";
//const S. = S..div``
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);
function App() {
  //localStorage.setItem("user");
  const [isLoading, setLoading] = useState(false);
  //const [currentTrack, setCurrentTrack] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const currentTrack = useSelector((state) => state.trackReducer);
  console.log(currentTrack);
  return (
    <ReduxProvider>
      <WithAuth>
        <S.Wrapper>
          <AppRoutes
            isLoading={isLoading}
            setLoading={setLoading}
            volume={volume}
            setVolume={setVolume}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />

          <GlobalStyle />
        </S.Wrapper>
      </WithAuth>
    </ReduxProvider>
  );
}

export default App;
