import { useContext } from 'react'
import { MdAddShoppingCart  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {

    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <MdAddShoppingCart  />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget