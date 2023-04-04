import { useState } from "react"



const ItemCount =({max,handleAgregar}) =>{
    const [cantidad,SetCantidad]=useState(1)

    const handleSumar=()=>{
        cantidad <max && SetCantidad(cantidad +1)}

        const handleRestar=()=>{
            cantidad>1&&(cantidad-1)}
    
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