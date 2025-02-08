import { useCart } from "../context/CartContext"; 
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, placeOrder } = useCart();

  if (!cart) {
    return <p>Loading...</p>;
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-price">Price: ${item.price}</p>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="cart-item-total">Total: ${item.price * item.quantity}</p>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Grand Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
