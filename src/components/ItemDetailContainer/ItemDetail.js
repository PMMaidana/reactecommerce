function ItemDetail ( {producto} ) {
    
    return (
    <>
        <h2>Detalle</h2>
        <div className='card w-50'>
                <div className="container">
                    <label>{producto.name}</label>
                </div>
                <div className="container">
                    <img src={producto.url} className="w-25" />
                    <br/>
                    <label>{producto.categoria}</label>
                </div>
                <div className="container">
                    <label>{producto.price}</label>
                </div>
            </div>
    </>
    )
}

export default ItemDetail;