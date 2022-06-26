import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../components/Store/Header/Header";

import Form from "../components/Form/Form";

const Login = () => {
  const onSubmitHandler = (form, callback) => {
    console.log("Sign In submitted: ", form);
    callback();
  };
  return (
    <>
      <NavBar />
      <Header title="MI CUENTA" />
      <Form
        title={"INICIO DE SESIÓN"}
        formArry={formArry}
        submitBtn={"ACCEDER"}
        onSubmit={onSubmitHandler}
        redirect={{
          label: "¿No tienes una cuenta? regístrate",
          link: {
            label: "aquí",
            to: "/registro",
          },
        }}
      />
      <Footer />
    </>
  );
};

const formArry = [
  {
      label: "Usuario",
      name: "username",
      type: "text",
  },
  {
      label: "Contraseña",
      name: "password",
      type: "password",
  },
];

export default Login;
