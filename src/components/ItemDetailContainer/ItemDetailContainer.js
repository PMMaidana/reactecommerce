import { useState, useEffect } from "react";
import { getBooks } from "../Productos/Libros";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    const [ producto, setProducto ] = useState ({});
    const [ cargando, setCargando ] = useState(true);
    const {id} = useParams();

    useEffect (() => {
        getBooks(id)
        .then(res => {
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