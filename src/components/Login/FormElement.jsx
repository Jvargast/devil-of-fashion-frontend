import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* height: 1200px; */
    background-color: #1d1d1d;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`

`;

const Title = styled.h1`
    font-size: 30px;
    color:#fff;
`;

const Form = styled.form`

`;

const Input = styled.input`

`;
const FormElement = () => {
  return (
    <Container>
      <Wrapper>
      <Title>INICIO DE SESIÓN</Title>
      <Form>
        <label>Nombre de usuario o correo electrónico</label>
        <Input placeholder='Nombre de usuario o contraseña'/>
        <Input placeholder=''/>
      </Form>
      </Wrapper>
        
    </Container>
  )
}

export default FormElement