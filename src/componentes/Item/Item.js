import "./Item.css"
import { Link } from "react-router-dom"

const Item = ( {item} ) => {

    return (
        <div className='contenedorItem'>
            <img src={item.img} alt={item.name}/>
            <h4 className="itemTitle">{item.name}</h4>
            <p className="itemDesc">{item.description}</p>
            <p className="itemPrice">Precio: <strong>${item.price}</strong></p>
           <button>
           <Link className="itemLink" to={`/detail/${item.id}`} >Ver más</Link>
           </button>
           
        </div>
    )
}

export default Item