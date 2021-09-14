import {useState, createContext, useContext} from 'react'

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([]);

    function agregarAlCarrito(prod, cantidad) {
        setListaCarrito([...listaCarrito, {item: prod, quantity: cantidad}])
    }

    const borrarListado =()=> {
        setListaCarrito([]);
    }

    console.log(listaCarrito);

    return (
        <AppContext.Provider value={{
            listaCarrito,
            agregarAlCarrito,
            borrarListado
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider