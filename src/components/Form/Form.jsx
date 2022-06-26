import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v } from "./Variables";

const Container = styled.div`
  width: 100vw;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.form`
  padding: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: #fff;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Label = styled.label`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background-color: #000000;
  border-color: #000000;
  border-radius: 5px;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 700px;
  color: #fff;
  font-size: 30px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  border-color: #000000;
  background-color: #000000;
  color: #fff;
  padding: 30px 20px;
  border-radius: 50px;
  font-size: 30px;
  cursor: pointer;
`;

const Redirect = styled.div`
    display: flex;
    justify-content: center;
    font-size: 22px;
    width: 100%;
    margin-top: ${v.smSpacing};
`;

const RedirectLabel = styled.span`
    color: gray;
`;

const RedirectLink = styled(Link)`
    color: #fff;
`; 

const prepareForm = (formArry) => {
  return formArry.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArry, submitBtn, onSubmit, redirect }) => {
  const initialForm = prepareForm(formArry);
  const [form, setForm] = useState(prepareForm(formArry));
  const onChangehandler = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));
  const hasRedirect = !!redirect;

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        {formArry.map(({ label, name, type }, index) => (
          <Forms key={index}>
            <Label htmlFor={name}>{label} </Label>
            <Input
              id={name}
              name={name}
              type={type}
              value={form[name]}
              onChange={(e) => onChangehandler(e)}
            />
          </Forms>
        ))}

        <Button
          onClick={(e) => {
            e.preventDefault();
            onSumbitHandler();
          }}
        >
          {submitBtn}
        </Button>
        {hasRedirect && (<Redirect>
            <RedirectLabel>{redirect.label}&nbsp;</RedirectLabel>
            <RedirectLink to={redirect.link.to}>{redirect.link.label}</RedirectLink>
        </Redirect>)}
      </Wrapper>
    </Container>
  );
};
Form.defaultProps = {
  title: "INICIO DE SESIÓN",
  formArry: [
    {
      label: "Nombre de usuario o correo electrónico",
      name: "username",
      type: "text",
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
    },
  ],
  submitBtn: "ACCEDER",
  onSubmit: (form) => console.log(form),
  redirect: {
    label: "¿No tienes una cuenta? regístrate",
    link: {
      label: "Aquí",
      to: "/login",
    },
  },
};

export default Form;
