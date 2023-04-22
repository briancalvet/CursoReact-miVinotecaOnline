

// consulto un unico producto de mi base de datos. 
import { useEffect, useState } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"    // lo hago con un Item Detail ya que no tengo un array de productos.
import { useParams } from "react-router-dom" // consultar los parametros de mi aplicacion


export const ItemDetailContainer = () => {

    const [item , setItem] = useState([])
    // el parametro pasado va ser siempre numerico, para lo mismo tenemos que parsearlo (parseInt)
    const {id} = useParams()



    useEffect(() => {
        fetch("../json/productos.json")  // Por estar en una ruta mas a profundidad de mi aplicacion.
        .then(response => response.json())
        .then(productos => {
            const prod = productos.find(prod => prod.id === parseInt(id))
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