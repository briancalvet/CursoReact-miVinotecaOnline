import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav>
            {/* img/.... de esta manera se llama a las imagenes que se encuentran en la carpeta publica.  */}
            <img className="Logo" src="img/Logo_Pagina.png" alt="" /> 
            <div className="Menu">
                <ul className="BarraNav">
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="">Nosotros</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;