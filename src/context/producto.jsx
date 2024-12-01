import { createContext, useState } from "react";
import info from './productosIniciales.json';

// contexto que actuara como base de datos por el momento
export const ProductoContext = createContext({
    data: [],
    setData: () => {}
});

// se define el proveedor para compartir el context
export const ProductoProvider = ({ children}) => {
    const [data, setData] = useState(info); 

    return (
        <ProductoContext.Provider value={{data, setData}}>
            {children}
        </ProductoContext.Provider>
    )
}