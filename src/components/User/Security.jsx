import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Store/Header/Header";
import HeaderProfile from "./HeaderProfile";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, updatePassword } from "../../actions/userActions";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import { PacmanLoader } from "react-spinners";

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
`;

const Container = styled.div`
  padding-top: 100px;
  background: #1d1d1b;
`;

const Content = styled.div`
  border: 1px solid darkgray;
  padding: 20px;
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

const Email = styled.div`
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

const LinkP = styled(Link)`
  text-decoration: none;
  color: #e1251b;
  padding-right: 0.2rem;
  &:hover {
    border-bottom: 1px solid #e1251b;
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  palette: {
    neutral: {
      main: "#e1251b",
      contrastText: "#fff",
    },
    cancel: {
      main: "#26262c",
      contrastText: "#1d1d1b",
    },
  },
});

const Security = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      handleClose();
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Contraseña actualizada correctamente");

      navigate("/account");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, alert, isUpdated, navigate]);

  return (
    <Container>
      <Header title="MI CUENTA" />
      <Title>Seguridad</Title>
      <HeaderProfile />
      <Content>
        <Data>
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
                    Contraseña
                  </label>
                </div>
              </div>
              <div style={{ flexGrow: "1" }}>
                <div>
                  <p style={{ color: "#dedee3" }}>
                    <LinkP to="#" onClick={handleOpen}>
                      Cambia tu contraseña.
                    </LinkP>{" "}
                    Mejora tu seguridad con una contraseña más compleja.
                  </p>
                </div>
              </div>
            </EmailContent>
          </Email>
        </Data>
      </Content>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cambiar contraseña
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Advertencia: si cambias tu contraseña, se invalidará para compras
            futuras.
          </Typography>
          {loading ? (
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
              <PacmanLoader color="#e1251b" />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: ".2rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <TextField
                  /* id="outlined-basic" */
                  label="Contraseña antigua"
                  variant="outlined"
                  color="neutral"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <TextField
                  /* id="outlined-basic" */
                  label="Contraseña nueva"
                  variant="outlined"
                  autoComplete="new-password"
                  color="neutral"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <TextField
                  /* id="outlined-basic" */
                  label="Confirmar contraseña"
                  variant="outlined"
                  color="neutral"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </ThemeProvider>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Button variant="text" color="cancel" onClick={handleClose}>
                    Cancelar
                  </Button>
                </ThemeProvider>

                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    color="neutral"
                    onClick={updatePasswordSubmit}
                  >
                    Cambiar contraseña
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Security;
