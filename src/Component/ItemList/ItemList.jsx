// recibir un array de productos y a cada uno de esos productos los voy a transformar en un 
// componente dada una plantilla. 
import {Item} from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"
export const ItemList = ({productos, plantilla}) => {
    console.log(productos)

    return(

        <>

            {
                plantilla === "Item" ?
                productos.map(producto => <Item Key = {producto.id} item = {producto} /> )
                : 
                productos.map(producto => <ItemCart Key = {producto.id} item = {producto} /> )
            }

           

            
        
        </>

    )
}