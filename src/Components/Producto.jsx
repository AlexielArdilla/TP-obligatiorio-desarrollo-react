import {Link} from "react-router-dom"

function Producto({id,nombre,precio,categoria,imagen}){
  
  return (
    <div className="producto-lista">
      <img src={imagen} alt="imagen del  producto"/>
      <h3>{nombre}</h3>
      <p id="precio">Precio ${precio}</p>
      <p>{categoria}</p>
      <button><Link id="enlace" to={`/producto/${id}`}>Ver Detalle</Link></button>
    </div>
  );
}

export default Producto;





