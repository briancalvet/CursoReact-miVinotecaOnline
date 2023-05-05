import { useState, createContext, useContext } from "react";

// useState lo voy a utilizar para definir el valor de este contexto. Booleano 
// createContext lo usaremos para generar el contexto mismo, para que se pueda implementar
//useContext crear una funcion que voy a exportar para usar dicho contexto. 

const CarritoContext = createContext() // Creo mi contexto

export const useCarritoContext = () => useContext(CarritoContext) // ofrezco una funcion que me permita consultar el contexto. 



export const CarritoProvider = (props) => { // forma de proveer el contexto en mi aplicacion, puede recibir propiedades si es necesario. 

    const [carrito , setCarrito] = useState([])

    // Agregar producto al carrito. 
    // quitar producto.
    // Precio total.
    // vaciar carrito.
    // Obtener cantidad. 
    // Obtener precio total. 
    // buscar producto - encontrarlo en mi carrito. 

    const inInCart = (id) => { // para poder consultar si un objeto existe o no en un carrito 
        // find => Obj - Some => Booleano

        return carrito.some(producto => producto.id === id) // v o f 
    }

    const addItem = (item , quantity) => {
        if(inInCart(item.id)){ // consulto si el producto existe o no en el carrito
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const auxiliar = [...carrito]
            auxiliar[indice].quantity = quantity // consulto y seteo la cantidad en el carrito.
            setCarrito(auxiliar)
        }else {
            // creo un nuevo objeto con los datos ingresados.
            const newItem = {
                    ...item,
                    quantity: quantity
                    
                }
            
                 setCarrito([...carrito, newItem]) // genero una copia del carrito mas el nuevo producto
            }
        }

        const removeItem = (id) => {
            setCarrito(carrito.filter(prod => prod.id !== id)) // traeme todos los productos que no tengan el id asociado / ingresado

        }


        const emptyCart = () => {
            setCarrito([]) 
        }

        const getItemQuantity = () => {

            return carrito.reduce((acum , prod) => acum += prod.quantity , 0)  // devuelvo la cantidad de producto en mi carrito 

        }

        const totalPrice = () => {
            return carrito.reduce((acum , prod) => acum += (prod.quantity * prod.price) , 0)
        }

        console.log(carrito)

        return (
            <CarritoContext.Provider value={{carrito , addItem , removeItem , emptyCart , totalPrice, getItemQuantity}} >

                {props.children}
            </CarritoContext.Provider>


            )

    }






        
    

  


