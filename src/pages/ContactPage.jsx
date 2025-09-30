import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            title="restaurant-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5118705402574!2d78.32387617540527!3d17.483062183420568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92ede5a0f8c9%3A0x3a5a75d18fe964c2!2sAarambh%20Township%20(Rajiv%20Swagruha)!5e0!3m2!1sen!2sin!4v1759069395887!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-info">
          <h3>SV Multicusine Restaurant</h3>
          <p>📍 Aarambh Township, Hyderabad, Telangana, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@svrestaurant.com</p>
          <button className="contact-btn">Get Directions</button>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
