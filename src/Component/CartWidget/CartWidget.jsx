import React from "react";

const CartWidget = (num) => {
    return (
        <div>
            <img className="carritoCompras" src="icon/icon_shopping_cart_notification.svg" alt="" />
            <p>{num}</p>
        </div>
    )
}

export default CartWidget;