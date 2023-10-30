import "../App.css";
import * as S from "./NavMenu/NavMenu.styles";
import { StyledLink } from "./NavMenu/NavMenu.styles";
export function SighInButton() {
  return (
    <S.MenuItem>
      <StyledLink to="/signin">Войти</StyledLink>
    </S.MenuItem>
  );
}
