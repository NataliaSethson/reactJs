import "./Item.css"
import { Link } from "react-router-dom"

const Item = ( {item} ) => {

    return (
        <div className='col-3 m-1'>
            <img src={item.img} alt={item.name}/>
            <h4 className="itemTitle">{item.name}</h4>
            <p className="itemDesc">{item.description}</p>
            <p className="itemPrice">Precio: <strong>${item.price}</strong></p>
            <Link className="itemLink" to={`/detail/${item.id}`} >Ver más</Link>
        </div>
    )
}

export default Item