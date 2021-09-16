import { useAppContext } from "../../context/AppContext"

const Cart = () => {

    const {listaCarrito , borrarListado, precioTotal} = useAppContext() 

    

    return (
        <div>
           {listaCarrito.map(pro =><div> 
               <p>{ pro.name}</p>
               <p><img src={`${pro.url}`} /></p>
               <p>{ pro.quantity}</p>

               </div>
               )}
            {precioTotal()}
           <button onClick={borrarListado} >Borrar Carrito</button>
        </div>
    )
}

export default Cart
