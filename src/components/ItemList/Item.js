import './Item.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

function Item({item}) {
    return (
        <>
            <div className="col-4">
                <div className="card" key={item.id}>
                    <div>
                        {item.name}
                    </div>
                    <div >
                        <img src={item.url} alt='img' />
                    </div>
                    <div>
                        {`precio $ ${item.price}`}<br/>
                    </div>
                    <Link to={`/detalle/${item.id}`}><button className="btn btn-primary">Detalles</button></Link>
                </div>
            </div>
        </>
    )
}

export default Item