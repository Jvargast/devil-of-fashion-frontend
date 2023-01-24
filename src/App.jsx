import Homepage from "./pages/Homepage";
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import Storepage from "./pages/Storepage";
import Product from "./pages/Product";
import Politics from "./pages/Politics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Acoount from "./pages/Acoount";
import {store} from './store/store';
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import Footer from "./components/Footer";


const App = () => {

  useEffect(()=> {
    store.dispatch(loadUser());
  },[])
  return (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route exact path="/tienda" element={<Storepage/>} />
      <Route path="/tienda/:keyword" element={<Storepage/>} />
      <Route path="/producto/:id" element={<Product/>} />
      <Route path="/envios-y-politicas" element={<Politics/>} />
      <Route path="/iniciar-sesion" element={<Login/>} />
      <Route path="/cuenta" element={<Acoount/>} />
      <Route path="/registro" element={<Register/>} />
    </Routes>
    <Footer/>
  </Router>);
};

export default App;