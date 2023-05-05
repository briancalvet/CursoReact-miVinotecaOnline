import { useCarritoContext } from "../../context/CartContex";

export const ItemCart = (item) => {
    const {removeItem} = useCarritoContext()

    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
            <img src={item.img} className="img-fluid rounded-start" alt= {`imagen de ${item.nombre}`} />
            </div>

            <div className="col-md8">
                <div className="card-Body">
                    <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                    <p className="cardText">Cantidad; {item.quantity}</p>
                    <p className="cardText">Precio Unitario: {item.precio}</p>
                    <p className="cardText">Subtotal: {item.precio * item.quantity} </p>

                    <button className="btn btn-danger " onClick={() => removeItem(item.id)}></button>
                </div>
            </div>
        </div>
    )
}