import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Navbar } from "./componentes/Navbar/Navbar";
import Carta from "./componentes/Bootstrap/Bootstrap";




function App() {
  return (
    <div >
   < Navbar></Navbar>
   <ItemListContainer servicios="Cursos" duracion="1 año"/>
   <ItemListContainer servicios="Carta Astral" duracion="1 mes"/>
   <Carta></Carta>
   
    </div>
    
  );
}

export default App;



