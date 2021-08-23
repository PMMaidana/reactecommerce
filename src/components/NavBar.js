import React from  "react";
import './NavBar.css'

function NavBar () {
    return <>
        <nav class="topnav">
    <ul>
      <li><a href="./index.html">Home</a></li>
      <li><a href="./libros.html">Libros</a></li>
      <li><a href="./contacto.html">Contacto</a></li>
      <li><a href="./logueo.html">Login/Registro</a></li>
      <li><a href="./ayuda.html">Ayuda</a></li>
    </ul>
  </nav>
        <h2>Las ofertas de la semana</h2>
        </>;
}

export default NavBar;