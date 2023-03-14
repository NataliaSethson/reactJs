import "./Navbar.css"
import { Link } from "react-router-dom"


export const Navbar =()=>{

    return(
       <header className="header_nav">
        <div className="contenedor_nav">
            <h1>ASTROLOGÍA MILLENNIAL</h1>
            <nav className="barra_nav">
            
           < Link to="items/curso" className="link_nav">CURSOS</Link>
           < Link to="items/servicios" className="link_nav">SERVICIOS</Link>
         
           
         </nav>
        </div>
       </header> 
  
    )

}


