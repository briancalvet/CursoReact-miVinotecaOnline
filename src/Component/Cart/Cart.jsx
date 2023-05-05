import { useCarritoContext } from "../../context/CartContex"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const Cart = () => {
    const {carrito  , totalPrice , emptyCart} = useCarritoContext()
    return (
        <div>
            
        {
            carrito.lenght === 0 ?
                <>
                    <h1>Carrito Vacio</h1>
                    <button className="btn btn-dark"><Link className="navLink" to={"/"}>Continuar Comprando</Link></button>
                </> 
            : 
                <div className="container cartContainer">
                    {<ItemList  productos={carrito} plantilla={"ItemCart"}/>}
                    <div className="cartButtons"> Resumen de la compra: {totalPrice()}</div>
                    <button className="btn btn-danger" onClick={() => emptyCart}>Vaciar Carrito</button>
                     <Link className="nav-link" to={"/"}>Continuar Comprando</Link>
                     <Link className="nav-link" to={"/checkout"}>Finaliza Compra</Link>
                </div>
     


        
        
        
        
        }


        </div>

    )

}