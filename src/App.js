import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  function onAdd(count) {
    console.log(`cantidad agregada ${count}`)
  }
  
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route exact path='/detalle/:id'>
              <ItemDetailContainer />
            </Route>
            
            
        </Switch>
    </Router>
    </div>
  );
}

//<ItemCount initial={1} stock={5} onAdd={onAdd} />

export default App;
