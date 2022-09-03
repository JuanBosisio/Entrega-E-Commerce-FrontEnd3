import React, { useState , useRef } from 'react'
import producto from "./data.json"
import Item from './Item';



// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {

  

  const divRef = useRef(null);



  const btnpressprev = () => {
      let width = divRef.current.offsetWidth;
      divRef.current.scrollLeft = divRef.current.scrollLeft - width;
      console.log(width)
  }

  const btnpressnext = () => {
      let width = divRef.current.offsetWidth;
      divRef.current.scrollLeft = divRef.current.scrollLeft + width;
      console.log(width)
  }

  const productos = producto;
  
  return (
    <div className='section-products'>
        <div className='product-slider'>
          <button className='first-button' onClick={btnpressprev}><p>&lt;</p></button>
          <div className='product-container' ref={divRef}>
            { productos.map(product => (
              <Item
                updateFather = {props.updateFather}
                key = {product.id}
                nombre= {product.producto.nombre}
                imagen={product.imagen}
                descripcion= {product.producto.descripcion}
                precio= {product.precio}
                stock= {product.stock}
              />
            ))
            }
          </div>
          <button className='last-button' onClick={btnpressnext}><p>&gt;</p></button>
        </div>
    </div>
  )
}
