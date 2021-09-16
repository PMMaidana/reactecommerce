import { useState, useEffect} from 'react';
import { loader } from "./Productos/Libros"
import ItemList from './ItemList/ItemList';
import { getFirestore } from '../service/getFirebase';

function ItemListContainer() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
    
        /* const db = getFirestore();
        const queryDB = db.collection('items').get()
        .then(data => {
            if(data.size===0) {
                console.log('no hay datos');
            }
            setItems(data.docs.map(item => ({ id: item.id, ...item.data() }) ) );
        }); */
        


        if(undefined){
            loader
            .then((resp)=> setItems(resp) )
        }else{
            loader
            .then((resp)=> setItems(resp) ) 
            }
        
    
        }, [])
        console.log(items)
    return (
        <>
            <ItemList items={items} />
        </>
        )
    }
    
export default ItemListContainer;