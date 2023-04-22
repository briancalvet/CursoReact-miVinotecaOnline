import React from "react"
import { Link } from "react-router-dom"

export const Categorias = () => {
    return (
        
        <ul className="BarraNav">
            <li>
                <Link className="nav-link BarraNav" to = {"/categor/1"} > Inicio </Link>
            </li>
            <li>
            <Link className="nav-link" to = {"/category/2"} > Productos </Link>
            </li>
            <li>
            <Link className="nav-link" to = {"/category/3"} > Nosotros </Link>
            </li>
            <li>
            <Link className="nav-link" to = {"/category/4"} > Contacto </Link>
            </li>
        </ul>
    
    )
}
