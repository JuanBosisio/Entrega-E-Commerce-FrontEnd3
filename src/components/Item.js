
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react"

export default function Item(props) {

  const initialState = () => props.stock;
  const [value,setValue] = useState(initialState);

  const hayStock = () =>
  {
    if (value !== "Agotado"){
      let nro = Number.parseInt(value)
      nro = nro - 1;
      
      if(nro === 0)
        setValue("Agotado");
      else 
        setValue(nro);
        props.updateFather(1);
    }
    
    
  }
  
  return (
    <div className='producto'>
      <h3>{props.nombre}</h3>
      <img src={require (`../img/${props.imagen}`)}/>
      <p>{props.descripcion}</p>
      <h4>{props.precio}</h4>
      <h5>Stock: <span>{value}</span> </h5> 
      <button onClick={() => hayStock()}>Sumar a carrito</button>
    </div>
  )
}