import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import {CartContext} from "../../Context/CartContext";




 const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext )
   
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    return(

        <div>
         <img src={item.img}alt={item.name}/>
         <h3 className="name">{item.name}</h3>
         <p className="description">{item.description}</p>
         <p className="price">Precio:${item.price}</p>
       
   
        
       { 
        isInCart(item.id)
        ? <Link to ="/cart" className = "btn btn-success my-2">Terminar mi compra</Link>
        : <ItemCount 
        max = {item.stock}
        cantidad= {cantidad}
        setCantidad= {setCantidad}
        handleAgregar={handleAgregar}

       />
       }

       <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        
            
       </div>
         
    )
    }

export default ItemDetail