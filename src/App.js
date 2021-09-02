import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  function onAdd(count) {
    console.log(`cantidad agregada ${count}`)
  }
  
  return (
    <div className="App">
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemListContainer />
    </div>
  );
}

export default App;
