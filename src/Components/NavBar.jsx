import {Link} from "react-router-dom"
import "../App.css";

function NavBar(){
  
  return (
    <>
    <div id="mercado"><h1>MercadoLibre donde comprás y vendés</h1></div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/alta">Registro</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
    </>
  );
}

export default NavBar;
