import { useAppContext } from "../../context/AppContext"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CheckInForm from "./CartCheckin";


const CartView = () => {

    const {listaCarrito , borrarListado, precioTotal, borrarItem} = useAppContext()

    const [ emptyCart, setEmptyCart ] = useState(true)

    useEffect (() => {
        if (listaCarrito.length !== 0){
            setEmptyCart(false);
        }else{setEmptyCart(true)}
    },[listaCarrito.length])

    console.log(listaCarrito);

    return (
        <>
    {emptyCart ?
    
    <div className="alert alert-primary" role="alert">El carrito esta vacio.
    <br />
        <Link to="/">
        <button className="btn btn-primary mt-5">Volver a Home</button>
        </Link>
    </div>
        :
    <>  
    <div className="container bootstrap snippets bootdey">
    <div className="col-md-9 col-sm-8 content">
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-info panel-shadow">
                    <div className="panel-body"> 
                        <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            
                                {listaCarrito.map((prod, myKey) =>
                                <tbody key={myKey}>
                                
                                <tr>
                                    <td><img src={`${prod.url}`} className="img-cart" alt="imagen" /></td>
                                    <td><strong>{prod.name}</strong><p>{prod.categoryId}</p></td>
                                    <td>
                                    <form className="form-inline">
                                        <p className="form-control">{prod.quantity}</p>
                                        <button onClick={(e) => borrarItem(prod.id, e)} className="btn btn-secondary">X</button>
                                    </form>
                                    </td>
                                    <td>${prod.price}</td>
                                    <td>({(prod.quantity*prod.price).toFixed(2)})</td>
                                    
                                </tr>
                                
                                <tr>
                                    <td colSpan="6">&nbsp;</td>
                                </tr>
                                
                                </tbody>
                                )}
                            
                                <tfoot>
                                <tr>
                                    <td colSpan="4" className="text-right"><strong>Total</strong></td>
                                    <td>${precioTotal()}</td>
                                </tr>
                                </tfoot>
                        </table>
                        <button className="btn btn-danger" onClick={borrarListado} >Borrar Carrito</button>
                        </div>

                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CheckInForm />
    </>
    }
    </>
    )
}

export default CartView;