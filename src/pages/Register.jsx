import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form/Form";
import NavBar from "../components/NavBar";
import Header from "../components/Store/Header/Header";

const Register = () => {
    const onSubmitHandler = (form, callback) => {
        console.log("Register Submitted:", form);
        callback();
    };


  return (
    <>
      <NavBar />
      <Header title="MI CUENTA" />
      <Form
        title={"REGÍSTRATE"}
        formArry={formArry}
        submitBtn={"CREAR CUENTA"}
        onSubmit={onSubmitHandler}
        redirect={{
          label: "¿Ya tienes cuenta?",
          link: {
            label: "Ingresar",
            to: "/iniciar-sesion",
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
        name: "name",
        type: "text",
    },
    {
        label: "Email",
        name: "email",
        type: "text",
    },

    {
        label: "Contraseña",
        name: "password",
        type: "password",
    },
    {
        label: "Confirmar contraseña",
        name: "confirmPassword",
        type: "password",
    },
];

export default Register;
