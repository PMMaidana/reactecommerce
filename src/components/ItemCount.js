import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';
import './itemCount.css';


function ItemCount( {initial, stock, onAdd}) {
  var [count, setCount] = useState(initial);
  const [cambiarBtn, setCambiarBtn] = useState(false);


  function add() {
    setCount(count + 1);
    }
  function remove() {
    if (count !== 0) {
        setCount(count - 1)
    }
  }

  function handlerOnAdd() {
    onAdd(count);
    setCount(initial);
    setCambiarBtn(true);
  }

  return (
    <div id="stock-item">
      
      { !cambiarBtn &&

        <div className="item-count" id="container">
              
        <button className="btn btn-primary" onClick={() => remove()}>
        -
        </button>
        <span> {count} </span>
        <button className="btn btn-primary" onClick={() => add()}>
        +
        </button>
        <br />

        <button className="btn btn-primary" onClick={handlerOnAdd}>Agregar</button>
        </div>
      }
      
      
      
      { cambiarBtn &&
        <div>
          <Link to='/cart'>
            <button className='btn btn-outline-primary btn-block'> Ir al carrito </button>
          </Link>
          <Link to='/'>
            <button className="btn btn-outline-primary btn-block"> Seguir comprando </button>
          </Link>
        </div>
      }
      
      
      
    </div>
  );
}

export default ItemCount;