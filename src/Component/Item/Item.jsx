
// Recibir un objeto y devolverlo en forma de componente con esta plantilla. 

// me permite navegar por mi aplicacion
import { Link } from "react-router-dom"

export const Item = ({item}) => {
    

    return (

        <div className="card" style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top" alt= {`imagen de ${item.nombre}`} />
            <div className="card-body">
            <h5 className="card-title">{item.nombre} </h5>
            <p className="card-text">Marca:{item.bodega}</p>
            <p className="card-text">Precio:{item.precio}</p>
            <p className="card-text">Stock Disponible:{item.stock}</p>
            {/* a Link le puedo agregar las mismas cualidades que a una etiqueta a */}
            <Link className="nav-link btn btn-primary "  to={`/product/${item.id}`}>Ver Producto</Link>
            </div>
        </div>
   

    )
}