import ItemCount from "../ItemCount";
import { useAppContext } from "../../context/AppContext.js"

function ItemDetail ( {producto} ) {

    const {agregarAlCarrito} = useAppContext();

    const onAdd=(cantidad)=>{
        console.log(cantidad)  
        agregarAlCarrito(producto, cantidad)
    }

    
    return (
    <>
        <h2>Detalle</h2>
        <div className='card w-50'>
                <div className="container">
                    <label>{producto.name}</label>
                </div>
                <div className="container">
                    <img src={producto.url} />
                    <br/>
                    <label>{producto.categoria}</label>
                </div>
                <div className="container">
                    <label>{producto.price}</label>
                </div>
                <ItemCount initial = {1} stock={10} onAdd={onAdd}/>
            </div>
    </>
    )
}

export default ItemDetail;