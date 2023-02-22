import "./Navbar.css"


export const Navbar =()=>{

    return(
       <header className="header_nav">
        <div className="contenedor_nav">
            <h1>ASTROLOGÍA MILLENNIAL</h1>
            <nav className="barra_nav">
                <ul>
           < li> <a href="#" className="link_nav">CURSOS</a></li>
           </ul>
           <ul>
           < li><a href="#" className="link_nav">CARTA ASTRAL</a></li>
           </ul>
         </nav>
        </div>
       </header> 
  
    )

}


