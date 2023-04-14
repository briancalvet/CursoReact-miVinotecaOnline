

// consulto un unico producto de mi base de datos. 
import { useEffect, useState } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"    // lo hago con un Item Detail ya que no tengo un array de productos.

export const ItemDetailContainer = () => {

    const [item , setItem] = useState([])
    useEffect(() => {
        fetch("./json/productos.json")
        .then(response => response.json())
        .then(productos => {
            const prod = productos.find(prod => prod.id === 1)
            setItem(prod)
        })
    }, [])
    return (
        <div>
            <div className="card mb-3 container itemDetail">
                <ItemDetail item={item} />
            </div>
        </div>
    )

}