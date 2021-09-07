import { useState, useEffect} from 'react';
import { loader } from "./Productos/Libros"
import ItemList from './ItemList/ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
    
        if(undefined){
            loader
            .then((resp)=> setItems(resp) )
        }else{
            loader
            .then((resp)=> setItems(resp) ) 
            }
        })
    
    return (
        <>
            <ItemList items={items} />
        </>
        )
    }
    
export default ItemListContainer;