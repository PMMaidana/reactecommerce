import React from  "react";
import './NavBar.css'
import CartWidget from "./CartWidget.jsx";
import { Link } from 'react-router-dom'

function NavBar () {
    return <>
        <nav className="topnav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/libros">Libros</a></li>
      <li><a href="/contacto">Contacto</a></li>
      <li><a href="/logueo">Login/Registro</a></li>
      <li><a href="/ayuda">Ayuda</a></li>
      <li><Link to='/cart'><CartWidget /></Link></li>
    </ul>
    <h3>Lethani Books</h3>
  </nav>
 
        </>;
}

export default NavBar;