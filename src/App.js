import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"




function App() {
  return (
    <BrowserRouter>
    < Navbar/>
            <Routes>
     <Route path="/" element={ <ItemListContainer/> }/>
     <Route path="items/:categoryId" element={ <ItemListContainer/> }/>
     <Route path="detail/:itemId" element={<ItemDetailContainer/>}/>
     <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      <div >

   
   
    </div>
    </BrowserRouter>
  
    
  );
}

export default App;



