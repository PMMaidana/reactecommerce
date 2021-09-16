import './Item.css';
import { Link } from 'react-router-dom'

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
                <Link to={`/detalle/${item.id}`}><button>Detalles</button></Link>
            </div>
        </>
    )
}

export default Item