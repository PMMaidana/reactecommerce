import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppContextProvider from './context/AppContext';
import Cart from "./components/Cart/Cart";
import BookList from "./components/BookList/BookList";
import LoginForm from './components/Cart/CartCheckin';

function App() {

  return (
  <AppContextProvider>
    <div className="App">
      <Router>
        <NavBar />
          <Switch>

            <Route exact path='/libros'>
              <BookList />
            </Route>
            
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            
            <Route exact path='/detalle/:id'>
              <ItemDetailContainer />
            </Route>
            
            <Route exact path='/cart'>
              <Cart />
            </Route>

            <Route exact path='/login'>
              <LoginForm />
            </Route>

            
        </Switch>
    </Router>
    </div>
  </AppContextProvider>
  );
}

export default App;
