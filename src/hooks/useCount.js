import { useState } from "react"

// defino minimo maximo porque es general, puedo implementarlo en cualquier parte de mi codigo
export const useCount = (valInicial = 1 , min , max) => { // si no me ingresa el valor inicial, el minimo sera 1

    if(valInicial < min || valInicial > max){ // si valInicial es menor que mi minimo o mayor que mi maximo, lo igualo al minimo para que no tenga errores. 
        valInicial = min
    }


    const [count , setCount] = useState(valInicial)

    const sum = () => count <  max && setCount(count + 1) 
    const minus = () => count > min && setCount(count - 1)

    const reset = () => setCount(valInicial) // reseteo a 1 o lo que halla ingresado el usuario.


    return {count, minus,sum,reset}
}