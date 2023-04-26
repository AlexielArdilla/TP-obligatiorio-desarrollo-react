import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";


function Productos() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState('Listado de productos')
  const [buscar, setBuscar] = useState("ipod");
  
  
  useEffect(
    () => {
      const request = async () => {
        try {
          const response = await getAllProductos(buscar)
          // const response = await res.json()
          console.log("Productos:", response.results)
          setProductos(response.data.results)
          setLoading(false)
        } catch (e) {
          console.log(e)
          
        }

      }
      request()
    },
    [buscar]
  );

  const handleChange = (event) => {
    
    const value = event.target.value;
    console.log(value);
    setBuscar(value);
  }

  if (loading) {
    return (
      <div>Cargando...</div>
    )
  } else {
    return (
      <>
      <h1 id="titulo">{titulo}</h1>
       <div id="buscador"> 
        <h3>Buscar:</h3> <br />
        <input type="text"
        name="buscar"
         value={buscar}
         onChange={handleChange}
        /> <br />
        <hr /></div>
        {productos.map((producto) =>
          <Producto
            id={producto.id}
            imagen={producto.thumbnail}
            nombre={producto.title}
            precio={producto.price}
            categoria=""
          />
        )}
       
      </>
    );
  }

}

export default Productos;
