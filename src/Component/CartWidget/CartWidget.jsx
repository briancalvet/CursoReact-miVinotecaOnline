import React from "react";
import { useCarritoContext } from "../../context/CartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <div>
           
            <button className="">
                <Link to={"/cart"} className="nav-link">
                <i className="carritoCompra">
                    <img src="" alt="" />
                </i>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                
                </Link>
                
            </button>
           
        </div>
    )
}

export default CartWidget;