import { useState, useEffect } from "react";
import { getBooks } from "../Productos/Libros";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

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
                    <Spinner animation="border" />
                :
                    <ItemDetail producto={producto} />
                    }
        </>
    )
}

export default ItemDetailContainer;