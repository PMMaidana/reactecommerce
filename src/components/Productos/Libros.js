import { getFirestore } from "../../service/getFirebase";

export async function getBooks(id) {

    const db = getFirestore();
    const queryDB = db.collection('items').get().then(data => {
    return data.docs.map(item => ({id: item.id, ...item.data() }) )
    })

    await resolveAfter2Seconds();
    if (id===undefined) {
        return queryDB
    }else{
        return queryDB;
    }
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
}