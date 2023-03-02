import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PaymentComplete from "../components/CartComponent/PaymentComplete";
import CheckoutStep from "../components/Stepper/CheckoutStep";
import Header from "../components/Store/Header/Header";
import "./../components/Stepper/Step.css";

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
`;

const NotAccount = styled.div`
  background: #000;
  font-size: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0rem;
`;

const LinkS = styled(Link)`
  text-decoration: none;
  padding-left: 0.8rem;
  color: inherit;
  border-bottom: 1px solid #000;
  :hover {
    border-bottom: 1px solid white;
  }
`;

const ConfirmPayment = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Container>
      <Header title="FINALIZAR COMPRA" />
      <SecondContainer>
        <Title></Title>
        <CheckoutStep activeStep={2} />
        <Content>
          {!isAuthenticated && (
            <NotAccount>
              ¿Aún no tienes una cuenta?{" "}
              <LinkS to="/registro"> Registrate aquí</LinkS>
            </NotAccount>
          )}
          <PaymentComplete cartItems={cartItems} />
        </Content>
      </SecondContainer>
    </Container>
  );
};

export default ConfirmPayment;
