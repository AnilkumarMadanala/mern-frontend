import React from "react";
import "../styles/MenuPage.css";
import { Link } from "react-router-dom";

import vegImg from "../assets/veg img.jpg";
import nonVegImg from "../assets/Indian Restaurant Food Platter.jpg";
import biryaniImg from "../assets/biryani.jpg";
import dessertImg from "../assets/desserts.jpg";
import drinksImg from "../assets/drinks.webp";

function MenuPage() {
  const cards = [
    { title: "Veg", image: vegImg },
    { title: "Non-Veg", image: nonVegImg },
    { title: "Biryanis", image: biryaniImg },
    { title: "Desserts", image: dessertImg },
    { title: "Drinks", image: drinksImg },
  ];

  return (
    <section className="menu-section">
      <h2>Delicious and Tasty</h2>
      <p>We Offer Top Notch !!</p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            className="menu-card"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="card-overlay">
              <h3>{card.title}</h3>
 {card.title === "Veg" ? (
          <Link to="/menu/veg" className="view-btn">View</Link>
        ) : (
          <button className="view-btn">View</button>
        )}            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
