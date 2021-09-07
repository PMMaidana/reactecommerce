import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';

function App() {
  function onAdd(count) {
    console.log(`cantidad agregada ${count}`)
  }
  
  return (
    <div className="App">
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
