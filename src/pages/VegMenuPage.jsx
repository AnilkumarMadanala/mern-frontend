import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VegMenuPage.css";

import vegStarter1 from "../assets/veg/veg.webp";
import vegStarter2 from "../assets/veg/veg starters.webp";
import vegMain1 from "../assets/veg/veg main course.jpg";
import vegMain2 from "../assets/veg/veg main course2.jpg";

function VegMenuPage() {
  const navigate = useNavigate();

  const starters = [
    { id: 1, name: "Paneer Tikka", price: 220, image: vegStarter1 },
    { id: 2, name: "Veg Spring Roll", price: 180, image: vegStarter2 },
  ];

  const mains = [
    { id: 3, name: "Veg Biryani", price: 250, image: vegMain1 },
    { id: 4, name: "Paneer Butter Masala", price: 280, image: vegMain2 },
  ];

  // Add to cart function
  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
    // navigate("/cart"); // optional: redirect to cart
  };

  return (
    <div className="veg-menu-page">
      <h2>Veg Menu</h2>

      {/* Starters */}
      <h3>Starters</h3>
      <div className="menu-grid">
        {starters.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button
              className="add-cart-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Main Course */}
      <h3>Main Course</h3>
      <div className="menu-grid">
        {mains.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button
              className="add-cart-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VegMenuPage;
