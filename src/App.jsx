
import './App.css';
import Navbar from './Component/navbar/Navbar';
//import CartWidget from './Component/CartWidget/CartWidget'
import ItemListCointainer from './Component/ItemListConteiner/ItemListContainer';

import { ItemDetailContainer } from './Component/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <div className="App">
        <Navbar />   
         <ItemListCointainer  /> 
        <ItemDetailContainer />
    </div>
  );
}

export default App;
