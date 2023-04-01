
import './App.css';
import Navbar from './Component/navbar/Navbar';
import CartWidget from './Component/CartWidget/CartWidget'
import ItemListCointainer from './Component/ItemListConteiner/ItemListContainer';


function App() {
  return (
    
    <div className="App">
        <Navbar />   
        <CartWidget />  
        <ItemListCointainer greeting={"Bienvenido"} /> 
    </div>
  );
}

export default App;
