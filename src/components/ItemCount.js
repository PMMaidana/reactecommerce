import React, { useState } from 'react';
import './NavBar.css'

function ItemCount( {initial, stock, onAdd}) {
  var [count, setCount] = useState(initial);
    
  function add() {
    setCount(count + 1);
    }
  function remove() {
    if (count !== 0) {
        setCount(count - 1)
    }
  }

  function handlerOnAdd() {
    onAdd(count)
    setCount(initial)
  }

  return (
    <div id="stock-item">
      <div id="container">
          <p>Libro 1</p>
      
      <button onClick={() => add()}>
        +
      </button>
      <span> {count} </span>
      <button onClick={() => remove()}>
        -
      </button><br />
      <button onClick={handlerOnAdd}>Agregar</button>
      </div>
    </div>
  );
}

export default ItemCount;