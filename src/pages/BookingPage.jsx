import React from "react";
import "../styles/BookingPage.css";

function BookingPage() {
  return (
    <section className="booking-section">
      <h2>Book a Table</h2>
      <p>Reserve your spot in advance and enjoy a delightful dining experience!</p>

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
        <button type="submit" className="booking-btn">Reserve Now</button>
      </form>
    </section>
  );
}

export default BookingPage;
