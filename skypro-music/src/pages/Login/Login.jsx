import { useNavigate } from "react-router-dom";
import * as S from "./Login.styles";
import { StyledLink } from "./Login.styles";

export const Login = ({ setUser }) => {
  const navigate = useNavigate();
  function onClick() {
    setUser("1234");
    localStorage.setItem("user", "1234");
    navigate("/");
  }
  return (
    <S.StyledDiv>
      <S.Login onClick={onClick}>Войти</S.Login>
      <StyledLink to="/registr">Зарегистрироваться</StyledLink>
    </S.StyledDiv>
  );
};
