import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import CheckOut from "./componentes/CheckOut/CheckOut"
import CartProvider from "./Context/CartContext";


function App() {
  return (
    <CartProvider>
  <BrowserRouter>
    < Navbar/>
            <Routes>
     <Route path="/" element={ <ItemListContainer/> }/>
     <Route path="items/:categoryId" element={ <ItemListContainer/> }/>
     <Route path="detail/:itemId" element={<ItemDetailContainer/>}/>
     <Route path="/cart" element={ <Cart /> } />
     <Route path="/checkOut" element={<CheckOut/>}/>
     <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    

   
   
    
    </BrowserRouter>
    </CartProvider>
  
  
    
  )

}

export default App;



