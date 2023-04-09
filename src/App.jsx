
import './App.css';
import Navbar from './Component/navbar/Navbar';
import CartWidget from './Component/CartWidget/CartWidget'
import ItemListCointainer from './Component/ItemListConteiner/ItemListContainer';
import { ItemCount } from './Component/ItemCount/ItemCount';
import { Item } from './Component/Item/Item';
import { ItemList } from './Component/ItemList/ItemList';

function App() {
  return (
    
    <div className="App">
        <Navbar />   
        <Item />
        <ItemListCointainer  /> 
        <ItemList productos = {[


        ]} />
        <ItemCount ValInicial={1} stock={10}/>
    </div>
  );
}

export default App;
