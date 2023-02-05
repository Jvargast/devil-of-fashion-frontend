import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../actions/userActions";
import Header from "../components/Store/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const Container = styled.div`
  padding-top: 100px;
  background: #1d1d1b;
`;

const Content = styled.div`
  border: 1px solid darkgray;
  padding: 10px;
  background-color: #18181b;
  /* margin-bottom: 4rem !important; */
  border-top: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-right: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-left: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-radius: 0.4rem !important;
`;

const Data = styled.div`
  padding: 0rem !important;
  width: 100% !important;
`;

const User = styled.div`
  padding: 2rem !important;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: #fff;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;
const Input = styled.input`
  background-color: #000000;
  border-color: #000000;
  border-radius: 5px;
  height: 70px;
  margin-bottom: 20px;
  width: 100%;
  color: #fff;
  font-size: 30px;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 50%;

  label {
    font-size: 1.8rem;
  }
`;

const Button = styled.button`
  width: 500px;
  border: none;
  border-color: #000000;
  background-color: #000000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
`;
const LinkS = styled(Link)`
  text-decoration: none;
  color: #808080;
  margin-top: 1rem;
  border-bottom: 2px solid #1d1d1b;
  &:hover {
    color: #e1251b;
    border-bottom: 2px solid #808080;
  }
`;

const Warning = styled.span`
    font-size: 1.8rem;
    color: ${(props) => (props.email ? "" : "#e1251b")};
    display: ${(props) => (props.email ? "none":"")};
`;

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);

  return (
    <Container>
      <Header title="Recupera tu contraseña" />
      <Content>
        <Data>
          <User>
            <Title>¿Tienes problemas para iniciar sesión?</Title>
            <Forms>
              <label>Correo electrónico <Warning email={email}>*</Warning></label>
              <Input
                id={email}
                name={email}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Forms>
            <p style={{ color: "#ffffffa3", fontSize: "1.5rem", marginBottom:"3rem" }}>
              Te enviaremos un link a tu correo para que puedas crear tu nueva contraseña.
            </p>
            {loading ? (
              <PacmanLoader color="#e1251b"/>
            ) : (
              <Button onClick={forgotPasswordSubmit}>
                Enviar enlace de inicio de sesión
              </Button>
            )}
            <LinkS to="/iniciar-sesion">Volver al inicio de sesión</LinkS>
          </User>
        </Data>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
