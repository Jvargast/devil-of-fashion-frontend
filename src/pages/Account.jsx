import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Store/Header/Header";
import { PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Container = styled.div`
  padding-top: 100px;
  background: #1d1d1b;
`;

const SecondContainer = styled.div`
  /* height: 50vh; */
  color: #fff;

`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 300px;
  /*   padding: 30px; */

  h2 {
    color: #fff;
    padding: 1em;
  }

  button {
    background-color: #000000;
    color: #fff;
    font-size: 30px;
    padding: 15px 40px;
    border: 1px solid #000000;
    border-radius: 10px;
  }
`;

const Loader = () => {
  return (
    <Container>
      <Header title="MI CUENTA" />
      <Title></Title>
      <div style={{padding:"40px", display:"flex", justifyContent:"center", height:"200px"}}>
        <PacmanLoader color="#e1251b" />
      </div>
    </Container>
  );
};

function Account() {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(()=> {
    if(isAuthenticated === false) {
      navigate("/iniciar-sesion")
    }
  },[isAuthenticated, loading, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Header title="MI CUENTA" />
          <SecondContainer>
            <Title>¡HOLA {user.name}!</Title>
            <h2>Cuenta creada: {moment(user.createdAt).format('DD/MM/YYYY')} </h2>
            <Content>
              <h2>AÚN NO TIENES HISTORIAL DE PEDIDOS</h2>
              <button>IR A TIENDA</button>
            </Content>
          </SecondContainer>
        </Container>
      )}
    </>
  );
}

export default Account;
