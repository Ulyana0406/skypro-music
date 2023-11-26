import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";
import { SideBar } from "./components/SideBar/SideBar";
function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const AuthContext = createContext(null);

export const WithAuth = ({ children }) => {
  const [auth, setAuth] = useState(getAuthFromLocalStorage());
  const navigate = useNavigate();
  const login = (authData) => {
    setAuth(authData);
    localStorage.setItem("user", JSON.stringify(authData));
    navigate("/");
  };
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      <App />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const user = useContext(AuthContext);
  return user;
};

export const ContextSideBar = () => {
  const user = useAuth();

  return <SideBar user={user} />;
};
