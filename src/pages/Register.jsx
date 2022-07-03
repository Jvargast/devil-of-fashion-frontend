import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../components/Store/Header/Header";

import FormComponent from "../components/Form2/FormComponent";

const Register = () => {
  return (
    <>
      <NavBar />
      <Header title="MI CUENTA" />
      <FormComponent />
      <Footer />
    </>
  );
};

export default Register;