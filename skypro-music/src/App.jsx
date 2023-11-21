//import React, { useState } from "react";
import "./App.css";
//import Cookies from "js-cookie";
import * as S from "./App.styles";
import GlobalStyle from "./globalStyles";
import { AppRoutes } from "./routes";
import { useState } from "react";
import { useContext, createContext } from "react";

//const S. = S..div``
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);
function App() {
  //localStorage.setItem("user");
  const [isLoading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [volume, setVolume] = useState(0.4);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch(
        "	https://skypro-music-api.skyeng.tech/user/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError("Ошибка входа");
    }
  };
  const register = async (email, password, repeatPassword) => {
    try {
      const response = await fetch(
        "https://skypro-music-api.skyeng.tech/user/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, repeatPassword }),
        }
      );
      const data = await response.json();
      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      setError("Ошибка регистрации");
    }
  };

  return (
    <UserContext.Provider value={{ userData, error, login, register }}>
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
    </UserContext.Provider>
  );
}

export default App;
