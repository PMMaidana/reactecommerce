import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import './CartCheckin.css';
import firebase from "firebase";
import 'firebase/firestore';
import { getFirestore } from "../../service/getFirebase";

const CheckInForm = () => {
const {listaCarrito , borrarListado, precioTotal} = useAppContext();
const [formData, setFormData] = useState(inatialState)  


function handleChange(e) {        
        
    setFormData(
        {
            ...formData,
            [e.target.name]: e.target.value
        }
    )
}

function handleSubmit(e){
    e.preventDefault()
    if (formData.email === formData.email2){
    const newOrder={
        buyer: formData,
        items: listaCarrito,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: precioTotal()
    }
    
    const db = getFirestore()
    const orders = db.collection('orders')

    orders.add(newOrder)
    .then(resp => alert(`la orden de compra es: ${resp.id}`))
    .catch(err => console.log(err))
    .finally(()=>{
        setFormData(inatialState)
        borrarListado()
    })
    }else {alert('Compruebe sus campos de e-mail')}
}


return (<>
    <form 
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
            <div className="card">
                <div className='container'>
                <input type="text"  placeholder="Ingrese su nombre" name="nombre" value={formData.nombre} required/>
                <input type="text"  placeholder="Ingrese un telefono de contacto" name="tel" value={formData.tel} required/>
                <input type="email" placeholder="Ingrese e-mail" name="email" value={formData.email} required/>
                <input type="email" placeholder="Confirme su e-mail" name="email2" value={formData.email2} required/>
                <button className="btn" >Terminar compra</button>
                </div>
            </div>
            </form>
</>)
}

export default CheckInForm;

const inatialState = {
    nombre: '',
    email:'',
    tel:''
}
