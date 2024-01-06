import "../App.css";
import * as S from "./NavMenu/NavMenu.styles";
import { StyledLink } from "./NavMenu/NavMenu.styles";
import { useAuth } from "../auth";
import { useEffect, useState } from "react";
export function SighInButton() {
  const [buttonInnerText, setButtonInnerText] = useState("Войти");
  const isAllowed = useAuth();
  useEffect(() => {
    isAllowed.auth !== null && setButtonInnerText("Выйти");
  }, [useAuth]);
  return (
    <S.MenuItem>
      <StyledLink to="/signin">{buttonInnerText}</StyledLink>
    </S.MenuItem>
  );
}
