import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppContextProvider from './context/AppContext';

function App() {

  return (
  <AppContextProvider>
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
  </AppContextProvider>
  );
}

export default App;
