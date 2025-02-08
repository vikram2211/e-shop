import { useCart } from "../context/CartContext";
import "./Orders.css";

const MyOrders = () => {
  const { orders } = useCart();

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order">
            <h3>Order ID: {order.id}</h3>
            {order.items.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} className="order-item-image" />
                <div className="order-item-details">
                  <h4>{item.title}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <hr></hr>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
