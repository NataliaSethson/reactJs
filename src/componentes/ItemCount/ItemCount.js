import { useState } from "react"



const ItemCount =({max,handleAgregar}) =>{
    const [cantidad,setCantidad]=useState(1)

    const handleSumar=()=>{
        cantidad <max && setCantidad(cantidad +1)}

        const handleRestar=()=>{
            cantidad>1&& setCantidad(cantidad-1)}
    
 return(
    <>
    <button onClick={handleRestar}> </button>
    <span className="" {...cantidad}></span>
    <button onClick={handleSumar}></button>
    <button onClick={handleAgregar}>Agregar al Carrito</button>
    </>

  
 )
}

export default ItemCount