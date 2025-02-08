import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { cart, orders } = useCart(); 

  return (
    <nav className="navbar">
      <h2>E-Shop</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="cart-menu">
          <Link to="/cart" className="cart-link">
            🛒 Cart
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
        </li>
        <li className="orders-menu">
          <Link to="/orders" className="orders-link">
            My Orders
            {orders.length > 0 && <span className="order-count">{orders.length}</span>}
          </Link>
        </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

