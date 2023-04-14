// platilla de productos 
import { ItemCount } from "../ItemCount/ItemCount"
export const ItemDetail = ({item}) => {

    const onAdds = (contador) =>{ // agregar al carrito. 
        console.log(contador)
        console.log(item)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src= {item.img} alt= {`imagen de ${item.nombre}`} className="img-fluit rounded-start"/>

            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"> {item.nombre}</h5>
                    <h5 className="card-text"> Bodega: {item.bodega}</h5>
                    <h5 className="card-text">Precio: ${item.precio}</h5>
                    <h5 className="card-text">Stock: ${item.stock}</h5>
                    <ItemCount valInicial ={1} min ={1} max ={item.stock} onAdd ={onAdds} item = {item}/>
                    
                </div>
            </div>
        </div>

    )
}