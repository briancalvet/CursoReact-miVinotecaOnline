import { useState } from "react";

export const ItemCount = ({ValInicial , stock}) => {

    const [contador , setContador] = useState(ValInicial) // defino el valor inicial del contador = 1

    const sumar = () => contador < stock && setContador(contador + 1); 
    const restar = () => contador > stock && setContador(contador - 1); 


    return (
        <div>
            <button onClick={() => restar()}> - </button>
            {contador}
            <button onClick={() => sumar()}> + </button>
            <button>Agregar</button>
        </div>
    )

}