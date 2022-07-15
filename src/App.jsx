import Homepage from "./pages/Homepage";
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import Storepage from "./pages/Storepage";
import Product from "./pages/Product";
import Politics from "./pages/Politics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

const App = () => {
  return (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/tienda" element={<Storepage/>} />
      <Route path="/tienda/:producto_id" element={<Product/>} />
      <Route path="/envios-y-politicas" element={<Politics/>} />
      <Route path="/iniciar-sesion" element={<Login/>} />
      {/* <Route path="/registro" element={<Register/>} /> */}
      <Route path="/registro" element={<Register/>} />
    </Routes>
  </Router>);
};

export default App;