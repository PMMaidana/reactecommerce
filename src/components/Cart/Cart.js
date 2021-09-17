import { useAppContext } from "../../context/AppContext"

const Cart = () => {

    const {listaCarrito , borrarListado, precioTotal, borrarItem} = useAppContext() 

    {/* <div className="Cart">
            
            <div className="Cart-Container">
            {listaCarrito.map(pro =><div> 
                <p>{ pro.name}</p>
                <p><img src={`${pro.url}`} /></p>
                <p>{ pro.quantity}</p>
                <button onClick="" className="delete-btn"> X </button>

                </div>
                )}
                {precioTotal()}
            <button className="remove" onClick={borrarListado} >Borrar Carrito</button>
            </div>
        </div> */}
    

    return (

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
                            <tbody>
                                {listaCarrito.map(prod =>
                                <>
                                
                                <tr>
                                
                                    <td><img src={`${prod.url}`} className="img-cart" /></td>
                                    <td><strong>{prod.name}</strong><p>{prod.categoria}</p></td>
                                    <td>
                                    <form className="form-inline">
                                        <p className="form-control">{prod.quantity}</p>
                                        <button onClick={() => borrarItem(prod.id)}><i className="fa fa-trash-o">X</i></button>
                                    </form>
                                    </td>
                                    <td>${prod.price}</td>
                                    <td>({prod.quantity*prod.price})</td>
                                </tr>
                                
                                <tr>
                                    <td colSpan="6">&nbsp;</td>
                                </tr>
                                
                                </>
                                )}
                            </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="4" className="text-right"><strong>Total</strong></td>
                                    <td>${precioTotal()}</td>
                                </tr>
                                </tfoot>
                        </table>
                        <button className="remove" onClick={borrarListado} >Borrar Carrito</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
    )
}

export default Cart

