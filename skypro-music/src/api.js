import { useState, useContext, createContext } from "react";
import { AuthPage } from "./pages/Registr/Registr";
import { Login } from "./pages/Login/Login";
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export async function getPlayList() {
  const Response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );

  if (!Response.ok) {
    if (Response.status === 500) {
      throw new Error("Ошибка сервера");
    }
  }

  const data = await Response.json();
  return data;
}
export const UserProvider = ({ AuthPage, Login }) => {
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
      <AuthPage />
      <Login />
    </UserContext.Provider>
  );
};
