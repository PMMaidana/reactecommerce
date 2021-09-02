const books = [
    { id: "1", name: "Curse of Strahd Revamped", url:'https://media.dnd.wizards.com/styles/product_image_left_scale/public/images/product/dnd_cosr_prodimge_th.png', categoria: "5e" , price: 99.99 },
    { id: "2", name: "Player's Handbook", url:'https://media.dnd.wizards.com/styles/product_image_left_scale/public/images/product/DnD_PHB.png', categoria: "5e" , price: 44.99 },
    { id: "3", name: "Monster Manual", url:'https://media.dnd.wizards.com/styles/product_image_left_scale/public/images/product/DnD_MonsterManual.png', categoria: "5e" , price: 44.99 },
  ];

function getBook(id) {
    if (id===undefined) {
        return books
    }else{
        return books.find(book => book.id === id)
    }
}
let loader = new Promise((resolve) => {
    setTimeout(() => {
        resolve(getBook());        
    }, 2000);
});

export default loader;