import React from  "react";
import './NavBar.css'
import CartWidget from "./CartWidget/CartWidget";
import { Link } from 'react-router-dom'

function NavBar () {
    return <>
        <nav className="topnav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/libros">Libros</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
      <li><Link to="/login">Login/Registro</Link></li>
      <li><Link to="/ayuda">Ayuda</Link></li>
      <li><Link to='/cart'><CartWidget /></Link></li>
    </ul>
    <h3>Lethani Books</h3>
  </nav>
 
        </>;
}

export default NavBar;