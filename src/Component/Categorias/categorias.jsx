
import { Link } from "react-router-dom"
import {memo} from "react"

export const Categorias =  memo( () => {
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

})
