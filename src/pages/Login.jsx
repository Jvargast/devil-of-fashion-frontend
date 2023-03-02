import React, { useEffect } from "react";

import Header from "../components/Store/Header/Header";

import Form from "../components/Form/Form";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../actions/userActions";
import { useAlert } from "react-alert";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  let location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "cuenta";

  useEffect(() => {
    if (error) {
      //alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`/${redirect}`);
    }
  }, [dispatch, error, alert, isAuthenticated, navigate, redirect]);

  const onSubmitHandler = (form, callback, e) => {
    /* e.preventDefault(); */
    /* console.log("Sign In submitted: ", form); */
    dispatch(login(form.username, form.password));
  };
  return (
    <>
      <div style={{ paddingTop: "95px" }}>
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
          forgotPassword={{
            label: "¿Olvidaste tu contraseña?",
            link: {
              to: "/password/forgot",
            },
          }}
        />
      </div>
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
