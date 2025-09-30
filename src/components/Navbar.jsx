import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(totalQty);
  }, [location]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">SV Restaurant</h2>

      {/* Center nav links */}
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === "/booking" ? "active" : ""}>
          <Link to="/booking">Book a Table</Link>
        </li>
        <li className={location.pathname === "/cart" ? "active cart-link" : "cart-link"}>
          <Link to="/cart">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
      </ul>

      {/* Right call now button */}
      <div className="navbar-contact">
        <a href="tel:+919876543210" className="call-now">
          Call Now: +91 98765 43210
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
