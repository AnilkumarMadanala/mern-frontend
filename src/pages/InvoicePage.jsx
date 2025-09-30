import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InvoicePage.css";

function InvoicePage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let storedCart = [];
    try {
      storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
      storedCart = [];
    }
    setCart(storedCart);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const taxRate = 0.05;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="invoice-page">
      <div className="invoice-container">
        <h2>SV Multicusine Restaurant</h2>
        <p>Aarambh Township, Hyderabad, Telangana</p>
        <p>Phone: +91 98765 43210</p>
        <hr />

        <h3>Invoice</h3>
        <p>Date: {new Date().toLocaleDateString()}</p>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-summary">
          <p>Subtotal: ₹{subtotal}</p>
          <p>Tax (5% GST): ₹{tax.toFixed(2)}</p>
          <h4>Grand Total: ₹{total.toFixed(2)}</h4>
        </div>

        <div className="invoice-actions">
          <button onClick={() => window.print()} className="print-btn">
            Print Invoice
          </button>
          <button onClick={() => navigate("/payment")} className="pay-btn">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
