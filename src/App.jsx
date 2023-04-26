import {Route,Routes, BrowserRouter as Router} from "react-router-dom"
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registro from './Pages/Registro'
import Detalle from "./Pages/Detalle";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alta" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
