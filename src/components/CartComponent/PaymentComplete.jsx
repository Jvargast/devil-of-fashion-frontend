import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 2rem;
`;

const BankContainer = styled.div`

`;

const PaymentComplete = ({cartItems}) => {
  const { shippingInfo } = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <Container>
      {shippingInfo.paymentMethod === 'BANK' ? <BankContainer>
        
      </BankContainer>:<></>}
    </Container>
  )
}

export default PaymentComplete