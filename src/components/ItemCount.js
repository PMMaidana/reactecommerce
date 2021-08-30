import React, { useState } from 'react';
import './NavBar.css'

function ItemCount() {
  // Declaración de una variable de estado que llamaremos "count"
  var [count, setCount] = useState(0);
  var [stock, setStock] = useState(4)
    function addOn() {
        if (stock > count) {
            setCount(count + 1);
        }
    }
    function remove() {
        if (stock >= count & count != 0) {
            setCount(count - 1)
        }
    }

  return (
    <div id="stock-item">
      <div id="container">
          <p>Libro 1</p>
      
      <button onClick={() => addOn()}>
        +
      </button>
      <span> {count} </span>
      <button onClick={() => remove()}>
        -
      </button>
      <p>Stock {stock}</p>
      </div>
    </div>
  );
}

export default ItemCount;