import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  resetPassword,
} from "../actions/userActions";
import Header from "../components/Store/Header/Header";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const Input = styled.input`
  background-color: #000000;
  border-color: #000000;
  border-radius: 5px;
  height: 70px;
  margin-bottom: 20px;
  width: 600px;
  color: #fff;
  font-size: 30px;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Button = styled.button`
  width: 500px;
  border: none;
  border-color: #000000;
  background-color: #000000;
  color: #fff;
  padding: 10px 10px;
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

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { token } = useParams();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, { password, confirmPassword }));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Contraseña actualizada con éxito");

      navigate("/iniciar-sesion");
    }
  }, [dispatch, error, alert, success, navigate]);

  return (
    <Container>
      <Header title="Recupera tu contraseña" />
      <Content>
        <Data>
          <User>
            <Forms>
              <Input
                id={password}
                name={password}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
              />
              <Input
                id={confirmPassword}
                name={confirmPassword}
                type="password"
                value={confirmPassword}
                placeholder="Repite tu contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Forms>
            {loading ? (
              <PacmanLoader color="#e1251b" />
            ) : (
              <Button onClick={resetPasswordSubmit}>
                Confirmar
              </Button>
            )}
            <LinkS to="/iniciar-sesion">Volver al inicio de sesión</LinkS>
          </User>
        </Data>
      </Content>
    </Container>
  );
};

export default ResetPassword;
