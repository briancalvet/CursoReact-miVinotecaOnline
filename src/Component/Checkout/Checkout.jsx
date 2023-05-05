
import { useRef } from "react";
import { useCarritoContext } from "../../context/CartContex";
export const Checkout = () => {
    const datForm = useRef() // crear una referencia para consultar los valores actuales del formulario
    const {carrito , totalPrice, emptyCart} = useCarritoContext()
    const  consultarForm = (e) => {
        // consultar los datos del formulario, con sus valores actuales. 
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) // pasar de html a objeto iterable. 
        const cliente = Object.fromEntries(datosFormulario) // dado un objeto iterable similar a lo que me trae FormData 
        console.log(cliente)

        e.target.reset() // reset formulario. 

    } 

    return(

        <>
            {carrito.lenght === 0 ?
            <>
            
                <h2>Para finalizar compra debo tener articulos en el carrito</h2>
                <Link className="nav-link" to={"/"}> <button className="btn btn-primary">Continuar comprando</button></Link>
            
             </>
            :
            
            <div className="container divForm"  >
            <form onSubmit={consultarForm} ref={datForm}>
            <div className="mb-3">
                    <label htmlFor="Nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailRepetido" />
                </div>

                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">Documento</label>
                    <input type="number" className="form-control" name="dni" />
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="Number" className="form-control" name="telefono" />
                </div>

                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>

                <button type="submit" className="btn btn-primary"> Finalizar compra </button>


            </form>
                
         </div>
        
        

        
      
            }

        </> 

       )
    } 