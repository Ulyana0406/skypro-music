import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useState, useNavigate } from "react";
import { useUser } from "../../api";

export function AuthPage() {
  const navigate = useNavigate();
  const { login, register, error } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleLogin = async () => {
    login(email, password);
    navigate("/");
  };

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

        <>
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
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={() => handleLogin()}>
              Войти
            </S.PrimaryButton>
            <Link to="/register">
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </>
        <>
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
        </>
      </S.ModalForm>
    </S.PageContainer>
  );
}
