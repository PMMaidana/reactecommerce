import React from  "react";
import { FiShoppingCart } from 'react-icons/fi'
import "./CartWidget.css"
import { useAppContext } from "../../context/AppContext"

function CartWidget () {
    
    const {listaCarrito} = useAppContext();
    
    return( 
    <div className="wrapper">
    <h3><FiShoppingCart /></h3>
    <span className='badge badge-warning' id='lblCartCount'> {listaCarrito.length} </span>
    </div>
    )
}

export default CartWidget;