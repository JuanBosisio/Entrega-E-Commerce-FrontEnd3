// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Cabecera from "./components/Cabecera.js";
import Banner from "./components/Banner.js";
import Listado from "./components/Listado.js";
import { useState } from "react";


function App() {

  const [value,setValue] = useState(0);
  const [id,setId] = useState(0);

  const updateValue = (cant) =>{
    setValue(value + cant);
    setId('id' + Math.floor(Math.random() * performance.now()));
  }
  

  return (
    <div className="App">
      <Cabecera 
        key={id}
        cantidad={value}/>
      <Banner />
      <Listado 
        updateFather={updateValue}
      />
    </div>
  );
}

export default App;
