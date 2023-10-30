import * as S from "./Login.styles";
import { StyledLink } from "./Login.styles";
export const Login = () => {
  return (
    <S.StyledDiv>
      <S.Login> Войти </S.Login>
      <StyledLink to="/registr">Зарегистрироваться</StyledLink>
    </S.StyledDiv>
  );
};
