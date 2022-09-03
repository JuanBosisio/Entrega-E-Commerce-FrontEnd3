import React from 'react'
import techBoxLogo from '../img/logo/tech-box-logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartShopping,faUser,faBars} from '@fortawesome/free-solid-svg-icons'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {


  return (
    <header>
      <div class="header-div1">
        <div>
          <img src={techBoxLogo} alt="Tech Box Logo"></img>
        </div>
        <div>
          <form  class="search-form" action= './data.json' method='post' target='_blank'>
            <input id="input-search" type="text" name="busqueda" autocomplete="off" data-boton="search-web" placeholder='Placas de video, celulares, auriculares...'></input>
            <button class="search-button" type="button" id="search-web">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div class="div-buttons">
          <div>
            <p><span>{props.cantidad}</span></p>
            <button class="right-buttons"><FontAwesomeIcon class="button-icon" icon={faCartShopping} /></button>
          </div>
          <button class="right-buttons"><FontAwesomeIcon class="button-icon" icon={faUser} /></button>
        </div>
      </div>
      <div class="header-div2">
        <div class="desplegable">
          <div class="categories-div">
            <FontAwesomeIcon icon={faBars} />
            <a href='#'> Categorias </a> 
          </div>
          <div class="categorias">
            <ul>
              <li><a href="#">Accesorios Computacion</a></li>
              <li class="component"><a href="#">Componentes</a>
                  <ul id="sub-categories">
                    <li><a href="#">Placas de video</a></li>
                    <li><a href="#">Procesadores</a></li>
                    <li><a href="#">Memorias</a></li>
                  </ul>
              </li>
              <li><a href="#">Notebooks / Tablets</a></li>
              <li><a href="#">Celulares</a></li>
            </ul>
          </div>
        </div>
        <div class="menu">
          <ul class= "menu-lis">
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Sobre nosotros</a></li>
            <li><a href='#'>Contacto</a></li>
            <li><a href='#'>Preguntas Frecuentes</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
