
import './App.css';
// rutas 

import {BrowserRouter , Routes , Rouse, Route} from 'react-router-dom';


//componentes
import Navbar from './Component/navbar/Navbar';
//import CartWidget from './Component/CartWidget/CartWidget'
import ItemListCointainer from './Component/ItemListConteiner/ItemListContainer';

import { ItemDetailContainer } from './Component/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Component/Checkout/Checkout';
function App() {
  return (
    
    <div className="App">
      {/* Dentro de este elemento configuro las rutas  de mis elementos */}
    <BrowserRouter>
        {/* Navbar lo pongo en todas las rutas, se va a encontrar en toda mi aplicacion */}
        <Navbar />   
        {/* Estableciendo las rutas de mis aplicaciones. -Routes van elementos que solo aparecer en rutas especificas, parte especificas de la pagina */}
        <Routes>
          {/* Local host 3000 solo mostrame este componente, el resto de los componentes van a ir para otras rutas, que no aparezca todo dentro de la misma. */}
          <Route path='/' element={<ItemListCointainer/>} /> 
          {/* Me va a agregar una categoria, cuando me ingreses una categoria sea la que sea voy a ir a esta ruta.  */}
          <Route path='/category/:category' element={<ItemListCointainer/>} />
          <Route path='/product/:id' element={<ItemDetailContainer />} /> 
          <Route path='/checkout' element={<Checkout />} />  
       
      

        </Routes>

        
    </BrowserRouter>


       
    </div>
  );
}

export default App;
