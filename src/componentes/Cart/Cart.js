import "./Cart.css"
import { useContext } from "react"
import{CartContext} from "../../Context/CartContext";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";




    const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)
    
        if (cart.length === 0) {
            return (
                <div className="container my-5">
                    <h2 className="cartTitle">No tienes productos agregados</h2>
                    <hr/>
                    <button>
                    <Link to="/" className="irAComprar">Ir a comprar</Link>
                    </button>
                
                </div>
            )
        }




    return (
        <div className="cartContenedor">
            <h2>TU COMPRA:</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.name}/>
                        <small>Precio unitario: ${prod.price} </small>
                        <small>Cantidad: {prod.cantidad}</small>
                        <p>Precio Total: ${prod.price * prod.cantidad}</p>
                        <button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            className="btn btn-danger"
                        >
                            <MdAddShoppingCart/>
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar mi carrito</button>
            <hr></hr>
            <hr></hr>
            <button className="terminarCompras">
            <Link className="terminarCompras" to="/checkout">Terminar compra</Link>  
            </button>
           
        </div>
    )}

export default Cart