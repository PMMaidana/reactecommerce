import {useState, createContext, useContext} from 'react'

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {

    const [listaCarrito, setListaCarrito] = useState([]);

    function agregarAlCarrito(prod, cantidad) {
        
        const index = listaCarrito.findIndex(i => i.id == prod.id);
        console.log(`este es el index ${index}`);

        if (index > -1) {
            const oldQy = listaCarrito[index].quantity;

            listaCarrito.splice(index, 1)
            setListaCarrito([...listaCarrito, {...prod, quantity: cantidad + oldQy}])

        }else {
        setListaCarrito([...listaCarrito, {...prod, quantity: cantidad}])
        }
    }

    const borrarListado =()=> {
        setListaCarrito([]);
    }

    const precioTotal =()=>{
        return listaCarrito.reduce((acum, valor)=>(acum + (valor.quantity * valor.price)), 0) 
    }
  

    return (
        <AppContext.Provider value={{
            listaCarrito,
            agregarAlCarrito,
            borrarListado,
            precioTotal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider