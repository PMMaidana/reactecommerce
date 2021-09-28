import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../service/getFirebase';

function BookList() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
    
        const db = getFirestore();
        db.collection('items').get()
        .then(data => {
            if(data.size===0) {
                console.log('no hay datos');
            }
            setItems(data.docs.map(item => ({ id: item.id, ...item.data() }) ) );

        });

        }, [])
    return (
        <>
            <ItemList items={items} />
        </>
        )
    }
    
export default BookList;