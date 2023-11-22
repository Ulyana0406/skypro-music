import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "../../App";
import * as S from "./../Registr/AuthPage.styles";
import { useState, useEffect } from "react";

export function Login() {
  const navigate = useNavigate();
  const { register, error } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  //function onClick() {
  //  setUser("1234");
  //  localStorage.setItem("user", "1234");
  //  navigate("/");
  // }
  const [repeatPassword, setRepeatPassword] = useState("");
  const handleRegister = async () => {
    register(email, password, repeatPassword);

    if (email !== "") {
      console.log({ email });
    } else {
      setRegistrationError("Заполните почту!");
    }
    if (password !== "") {
      console.log({ password });
    } else {
      setRegistrationError("Укажите пароль!");
    }
    if (password === repeatPassword) {
      console.log({ repeatPassword });
    } else {
      setRegistrationError("Укажите идентичные пароли!");
    }
    const response = await register({ email, password });
    if (response?.status === 201) {
      alert(`Пользователь успешно зарегистрирован`);
      return;
    }

    if (response?.status === 400) {
      alert(`произошла ошибка: ${response.email}, ${response.password}`);
      return;
    }
    if (response?.status === 500) {
      alert(`Ошибка соединения с сервером. Попробуйте чутка позже.`);
      return;
    }
    navigate("/");
  };
  useEffect(() => {
    setRegistrationError(null);
  }, [email, password, repeatPassword]);
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
        <div className="regErrors">
          {registrationError ? registrationError : null}
        </div>
        <S.Buttons>
          <S.PrimaryButton onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
