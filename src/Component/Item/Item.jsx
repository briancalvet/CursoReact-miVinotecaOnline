
// Recibir un objeto y devolverlo en forma de componente con esta plantilla. 

export const Item = ({item}) => {
    console.log(item)

    return (

        <div className="card" style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top" alt= {`imagen de ${item.nombre}`} />
            <div className="card-body">
            <h5 className="card-title">{item.nombre} </h5>
            <p className="card-text">Marca:{item.bodega}</p>
            <p className="card-text">Precio:{item.precio}</p>
            <p className="card-text">Stock Disponible:{item.stock}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    )
}