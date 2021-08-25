import React from  "react";
import './NavBar.css'
import CartWidget from "./CartWidget.jsx";

function NavBar () {
    return <>
        <nav class="topnav">
    <ul>
      <li><a href="./index.html">Home</a></li>
      <li><a href="./libros.html">Libros</a></li>
      <li><a href="./contacto.html">Contacto</a></li>
      <li><a href="./logueo.html">Login/Registro</a></li>
      <li><a href="./ayuda.html">Ayuda</a></li>
      <li><CartWidget /></li>
    </ul>
    <h3>Lethani Books</h3>
  </nav>
 
        </>;
}

export default NavBar;