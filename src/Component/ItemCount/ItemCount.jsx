import { useState } from "react";
import { useCount } from "../../hooks/useCount";

export const ItemCount = ({valInicial , min , max , onAdd}) => {

  
    const {count , minus , sum , reset} = useCount(1, 1 , 10)

    return (
        <div>
            <button onClick={() => minus()}> - </button>
            {count}
            <button onClick={() =>sum()}> + </button>
            <button className="btn" onClick={() =>reset()}> Reset </button>
            <button className="btn btn-secondary" onClick={() => onAdd(count)}>Agregar al carrito</button>
           
        </div>
    )

}