import React from "react";
import "../styles/AboutPage.css";
import aboutusImg from "../assets/aboutus.jpg";

function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>SV Multicusine Restaurant</strong>, we believe in serving
            love on a plate. Our chefs bring authentic flavors from across the
            world, blending tradition with modern taste.
          </p>
          <p>
            Whether you're craving spicy biryanis, delightful desserts,
            or refreshing drinks – we promise an unforgettable dining
            experience in a cozy and welcoming atmosphere.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
        <div className="about-image">
          <img src={aboutusImg} alt="About SV Restaurant" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
