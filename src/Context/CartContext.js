import { createContext, useEffect, useState } from "react";
import swal from 'sweetalert';


export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState(init)
  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
      swal({
        text: "Producto agrgegado!",
      });
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }
  
    const totalCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
        swal({
          text: "Carrito vacío",
        });
    }

    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
        swal({
          text: "Eliminar del carrito",
        });
        
    }

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito
          }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider