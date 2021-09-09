import './Item.css';

function Item({item}) {
    return (
        <>
            <div className="card" key={item.id}>
                <div>
                    {item.name}
                </div>
                <div >
                    <img src={item.url} alt='img' />
                </div>
                <div>
                    {`precio ${item.price}`}<br/>
                </div>
                <a href={`/detalle/${item.id}`}><button>Detalles</button></a>
            </div>
        </>
    )
}

export default Item