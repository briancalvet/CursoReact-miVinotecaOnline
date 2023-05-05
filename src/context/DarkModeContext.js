import { useState, createContext, useContext } from "react";

// useState lo voy a utilizar para definir el valor de este contexto. Booleano 
// createContext lo usaremos para generar el contexto mismo, para que se pueda implementar
//useContext crear una funcion que voy a exportar para usar dicho contexto. 

const DarkModeContext = createContext() // Creo mi contexto

export const useDarkModeContext = () => useContext(DarkModeContext) // ofrezco una funcion que me permita consultar el contexto. 



export const DarkModeProvider = (props) => { // forma de proveer el contexto en mi aplicacion, puede recibir propiedades si es necesario. 

    const [darkMode , setDarkMode] = useState(false) // el valor inicial de darkMode

    // funciones para modificar mi state. 
    const toggleDarkMode = () => {
        setDarkMode(!darkMode) // si estaba en verdadero lo paso a falso. o en verdadero a falso. 
        //niego el valor de darkMode

        // agregacion por un tema de css. 

        if(!darkMode){ // !darkMode por consulta de la modificacion. 
            document.body.classList.add('darkMode')
        }else {
            document.body.classList.remove('darkMode')
        }
        
    }

    //Agrego funciones y valores van a ser exportados juntos con el provider

    return (
        //envio el modo y la manera de setearlo, dento de value
        <DarkModeContext.Provider value={{darkMode , toggleDarkMode}}>
                
                {props.children} 
        </DarkModeContext.Provider>
    )



}