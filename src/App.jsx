import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Storepage from "./pages/Storepage";
import Product from "./pages/Product";
import Politics from "./pages/Politics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Account from "./pages/Account";
import { store } from "./store/store";
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Configuration from "./components/User/Configuration";
import Security from "./components/User/Security";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/tienda" element={<Storepage />} />
        <Route path="/tienda/:keyword" element={<Storepage />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/envios-y-politicas" element={<Politics />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cuenta" element={<Account />} />
          <Route path="/ajustes/perfil" element={<Configuration />} />
          <Route path="/ajustes/seguridad" element={<Security />} />
        </Route>
        <Route path="/registro" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
