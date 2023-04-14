
// la consulta a mis productos de mi Base de datos y se los envio a Item List.

import { useState , useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"

const BBD = [
    {
        id : 1, 
        idCategoria : 1, 
        nombre: "Luigi Bosca Sangre Malbec", 
        bodega: "Luigi Bosca", 
        precio : 9000, 
        stock : 10,
        img: ""





    },

    {
        id: 2, 
        idCategoria : 1, 
        nombre : "Biolento", 
        bodega: "MAAL", 
        precio : 8000, 
        stock : 3,
        img : ""
    },

    {
        id : 3, 
        idCategoria : 2, 
        nombre : "Espumante ALYDA", 
        bodega : "Salentein", 
        precio : 9000, 
        stock : 20,
        img : ""
    },

    {
        id : 4, 
        idCategoria : 2, 
        nombre : "Espumante Chandon Extra Brut", 
        bodega : "Chandon", 
        precio : 3500, 
        stock : 50,
        
    },


    {
        "id" : 5, 
        "idCategoria" : 3, 
        "nombre" : "Gin Nordes", 
        "bodega" : "Nordes", 
        "precio" : 15000, 
        "stock" : 20,
        "img" : ""
    }


]

const ItemListCointainer = () => {
   
    const [productos, setProductos] = useState([])

    useEffect(() => {

     const  promesa = (condicional) => new Promise((resolve, reject) => {

            if(condicional){
               resolve(BBD)
            }
             reject("No posee los permisos necesarios")

        })

        promesa(true)
        .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0 )
            const items = <ItemList productos={productos}/> // envio los productos consultados
            setProductos(productosFiltrados) // visualizo los productos en mi pagina
        })
        .catch(error => console.log(error))

    } , [])
   
    return (
        /* Row para que todos mis productos aparezcan uno al lado de otro */ 
        <div className="row"> 
           
           {/* visualizar los productos ya que es el contenedor donde van a estar agregados los productos. */}
            {<ItemList productos={productos} />}
        </div>
    )
}

export default ItemListCointainer