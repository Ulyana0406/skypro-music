import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "../../App";
import * as S from "./../Registr/AuthPage.styles";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const { register, error } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //function onClick() {
  //  setUser("1234");
  //  localStorage.setItem("user", "1234");
  //  navigate("/");
  // }
  const [repeatPassword, setRepeatPassword] = useState("");
  const handleRegister = async () => {
    register(email, password, repeatPassword);
    navigate("/");
  };
  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>

        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value);
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
