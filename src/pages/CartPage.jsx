import React, { useEffect, useState } from "react";
import "../styles/CartPage.css";
import { Link } from "react-router-dom";
function CartPage() {
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
      <h3>Total: ₹{total}</h3>
<button className="checkout-btn">
  <Link to="/invoice">Proceed to Invoice & Payment</Link>
</button>
    </div>
  );
}

export default CartPage;
