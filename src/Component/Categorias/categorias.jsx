
import { Link } from "react-router-dom"

export const Categorias = () => {
    return (
        
        <ul className="BarraNav">
            <li>
                <Link className="nav-link " to = {"/"} > Inicio </Link>
            </li>
            <li>
                <Link className="nav-link " to = {"/category/1"} > Vinos </Link>
            </li>
            <li>
            <Link className="nav-link" to = {"/category/2"} > Espumantes </Link>
            </li>
            <li>
            <Link className="nav-link" to = {"/category/3"} > Gin </Link>
            </li>
            <li>
            <Link className="nav-link" to = {"/category/4"} > Otros </Link>
            </li>
        </ul>
    
    )
}
