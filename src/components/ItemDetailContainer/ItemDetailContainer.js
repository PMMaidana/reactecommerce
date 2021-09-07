import { useState, useEffect } from "react";
import { getProduc } from "../Productos/Libros";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [ producto, setProducto ] = useState ({});
    const [ cargando, setCargando ] = useState(true);

    useEffect (() => {
        getProduc.then(res => {
            setProducto(res)
            setCargando(false)
        })
    }, [])

    return (
        <>
        {cargando ?
                    <h2>Cargando Producto..</h2>
                :
                    <ItemDetail producto={producto} />
                    }
        </>
    )
}

export default ItemDetailContainer;