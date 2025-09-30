import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HomePage.css"; 
import { Link } from "react-router-dom";

import vegImg from "../assets/veg img.jpg";
import nonVegImg from "../assets/Indian Restaurant Food Platter.jpg";
import biryaniImg from "../assets/biryani.jpg";
import dessertImg from "../assets/desserts.jpg";
import drinksImg from "../assets/drinks.webp";
import aboutusImg from "../assets/aboutus.jpg";

function HomePage() {
  const cards = [
    { title: "Veg", image: vegImg },
    { title: "Non-Veg", image: nonVegImg },
    { title: "Biryanis", image: biryaniImg },
    { title: "Desserts", image: dessertImg },
    { title: "Drinks", image: drinksImg },
  ];

  return (
    <div>
      {/* <Navbar /> */}

      {/* 🔹 Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay">
          <h1>Welcome to SV Multicusine Restaurant</h1>
          <p>Delicious Food • Cozy Ambience • Perfect Dining</p>
          <Link to="/menu" className="hero-btn">
      Explore Menu
    </Link>
        </div>
      </section>

      {/* 🔹 Menu Section */}
      <section id="menu" className="menu-section">
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
                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 About Us Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At <strong>SV Multicusine Restaurant</strong>, we believe in
              serving love on a plate. Our chefs bring authentic flavors from
              across the world, blending tradition with modern taste.
            </p>
            <p>
              Whether you're craving spicy biryanis, delightful desserts, or
              refreshing drinks – we promise an unforgettable dining experience
              in a cozy and welcoming atmosphere.
            </p>
            <button className="about-btn">Learn More</button>
          </div>

          <div className="about-image">
            <img src={aboutusImg} alt="About SV Restaurant" />
          </div>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          {/* Map */}
          <div className="map-container">
            <iframe
              title="restaurant-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5118705402574!2d78.32387617540527!3d17.483062183420568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92ede5a0f8c9%3A0x3a5a75d18fe964c2!2sAarambh%20Township%20(Rajiv%20Swagruha)!5e0!3m2!1sen!2sin!4v1759069395887!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>SV Multicusine Restaurant</h3>
            <p>📍 Aarambh Township, Hyderabad, Telangana, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ contact@svrestaurant.com</p>
            <button className="contact-btn">Get Directions</button>
          </div>
        </div>
      </section>

      {/* 🔹 Booking Section */}
      <section id="booking" className="booking-section">
        <h2>Book a Table</h2>
        <p>
          Reserve your spot in advance and enjoy a delightful dining experience!
        </p>

        <form className="booking-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <input type="date" required />
          </div>
          <div className="form-group">
            <input type="time" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">No. of Guests</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
          </div>
          <button type="submit" className="booking-btn">
            Reserve Now
          </button>
        </form>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
