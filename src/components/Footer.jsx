import React from "react";
import "../styles/Footer.css";
import facebookImg from "../assets/icons/facebook.png";
import instagramImg from "../assets/icons/instagram.png";
import twitterImg from "../assets/icons/twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-about">
          <h3>SV Multicusine Restaurant</h3>
          <p>
            Serving delicious meals with love and passion. 
            Experience the perfect blend of taste and ambience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/booking">Book a Table</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Aarambh Township, Hyderabad, Telangana</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@svrestaurant.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookImg} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramImg} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterImg} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SV Multicusine Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
