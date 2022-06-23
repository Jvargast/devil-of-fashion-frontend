import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* height: 1200px; */
    background-color: #1d1d1d;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    color:#fff;
`;

const Form = () => {
  return (
    <Container>
        <Title>REGÍSTRATE</Title>
        <div>Nombre de usuario</div>
        <div>Nombre</div>
        <div>Contaseña</div>
        <div>Repetir Contraseña</div>

    </Container>
  )
}

export default Form