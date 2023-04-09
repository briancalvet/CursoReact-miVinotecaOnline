// recibir un array de productos y a cada uno de esos productos los voy a transformar en un 
// componente dada una plantilla. 
import {Item} from "../Item/Item"
export const ItemList = ({productos}) => {
    console.log(productos)

    return(

        <>

            {productos.map(producto => <Item Key = {producto.id} item = {producto} /> )}
        
        </>

    )
}