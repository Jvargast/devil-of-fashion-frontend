import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { useAlert } from "react-alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateProfile } from "../../actions/userActions";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Header from "../Store/Header/Header";
import HeaderProfile from "./HeaderProfile";

const Container = styled.div`
  padding-top: 100px;
  background: #1d1d1b;
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
  border: 1px solid darkgray;
  padding: 10px;
  background-color: #18181b;
  /* margin-bottom: 4rem !important; */
  border-top: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-right: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-left: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-radius: 0.4rem !important;
`;

const Data = styled.div`
  padding: 0rem !important;
  width: 100% !important;
`;

const User = styled.div`
  padding: 2rem !important;
  width: 100% !important;
`;

const UserContent = styled.div`
  display: flex !important;
  flex-wrap: nowrap !important;
  position: relative !important;
  flex-grow: 1 !important;
  font-size: 1.3rem !important;
`;

const Email = styled.div`
  border-top: 1px solid hsla(0, 0%, 100%, 0.08);
  padding: 2rem !important;
  width: 100% !important;
`;

const EmailContent = styled.div`
  display: flex !important;
  flex-wrap: nowrap !important;
  position: relative !important;
  flex-grow: 1 !important;
  font-size: 1.3rem !important;
`;

const ButtonChange = styled.div`
  padding: 2rem !important;
  background-color: #26262c !important;
`;

const InputProfile = styled.input`
  opacity: ${(props) => (props.edit ? "0.5" : "1")};
  pointer-events: ${(props) => (props.edit ? "none" : "visible")};
  display: block;
  width: 100%;
  height: 3rem;
  font-size: 1.3rem;
  appearance: none;
  background-clip: padding-box;
  line-height: 1.5;
  border-style: solid;
  transition: border 100ms ease-in background-color 100ms ease-in;
  border-width: 2px;
  border-color: hsla(0, 0%, 100%, 0.16);
  color: ${(props) => (props.completed ? "#efeff1" : "#dedee3")};
  background-color: hsla(0, 0%, 100%, 0.16);
  border-radius: 0.4rem 0px 0px 0.4rem;
  padding: 0.5rem 1rem;
`;

const ButtonConf = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  height: 3rem;
  font-size: 1.3rem;
  white-space: nowrap;
  border-radius: 0.4rem;
  color: ${(props) => (props.disabled ? "hsla(0, 0%, 100%, 0.13)" : "#dedee3")};
  pointer-events: ${(props) => (props.disabled ? "none" : "visible")};
  background-color: hsla(0, 0%, 100%, 0.13);
`;

const Configuration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState(true);

  const validate = () => {
    if (
      user.name.length !== name.length ||
      user.email.length !== email.length
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleEdit = () => {
    setEdit(!edit);
    if (edit === true) {
      alert.info("Ya puedes cambiar tu nombre de perfil");
    }
  };

  const updateTheProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Perfil actualizado con éxito");
      dispatch(loadUser());
      navigate("/cuenta");
      dispatch({ type: UPDATE_PROFILE_RESET });
    }
  }, [alert, dispatch, error, isUpdated, navigate, user]);

  return (
    <Container>
      <Header title="MI CUENTA" />
      <Title>Configuración</Title>
      <HeaderProfile/>
      <Content>
      <Data>
        <User>
          <UserContent>
            <div
              style={{
                width: "18rem",
                flexShrink: "0",
                paddingRight: "2rem",
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <label style={{ color: "#f7f7f8", fontWeight: "700" }}>
                  Nombre
                </label>
              </div>
            </div>
            <div style={{ flexGrow: "1" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div style={{ flexGrow: "1", marginRight: "1px" }}>
                    <div style={{ position: "relative" }}>
                      <InputProfile
                        type="text"
                        value={name}
                        name={name}
                        onChange={(e) => setName(e.target.value)}
                        autoCapitalize="off"
                        autoCorrect="off"
                        disabled={edit}
                        edit={edit}
                      />
                    </div>
                  </div>
                  <button
                    style={{
                      backgroundColor: "hsla(0,0%,100%,.08)",
                      color: "#efeff1",
                      display: "inline-flex",
                      position: "relative",
                      alignItems: "center",
                      justifyContent: "center",
                      verticalAlign: "middle",
                      overflow: "hidden",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      userSelect: "none",
                      fontWeight: "600",
                      borderTopRightRadius: "0.4rem",
                      borderBottomRightRadius: "0.4rem",
                      fontSize: "1.rem",
                      height: "3rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 0.4rem",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          width: "2rem",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              overflow: "hidden",
                            }}
                          >
                            <div style={{ paddingBottom: "100%" }}></div>
                            <EditIcon
                              style={{
                                position: "absolute",
                                left: "0",
                                width: "100%",
                                top: "0",
                                minHeight: "100%",
                              }}
                              onClick={handleEdit}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <p style={{ color: "#dedee3" }}>Puedes actualizar tu nombre.</p>
              </div>
            </div>
          </UserContent>
        </User>
        <Email>
          <EmailContent>
            <div
              style={{
                width: "18rem",
                flexShrink: "0",
                paddingRight: "2rem",
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <label style={{ color: "#f7f7f8", fontWeight: "700" }}>
                  Email
                </label>
              </div>
            </div>
            <div style={{ flexGrow: "1" }}>
              <div style={{ position: "relative" }}>
                <InputProfile
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </div>
              <div style={{ marginTop: "1rem " }}>
                <p style={{ color: "#dedee3" }}>
                  Puedes cambiar tu correo electronico
                </p>
              </div>
            </div>
          </EmailContent>
        </Email>
      </Data>
      <ButtonChange>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonConf onClick={updateTheProfile} disabled={validate()}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexGrow: "0",
                paddingTop: "0px",
                paddingBottom: "0px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <div
                style={{
                  flexGrow: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Guardar cambios
              </div>
            </div>
          </ButtonConf>
        </div>
      </ButtonChange>
      {loading ? (
        <>
          <div
            style={{
              padding: "40px",
              display: "flex",
              justifyContent: "center",
              height: "200px",
            }}
          >
            <PacmanLoader color="#e1251b" />
          </div>
        </>
      ) : (
        <></>
      )}
    </Content>
    </Container>
  );
};

export default Configuration;
