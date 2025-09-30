import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VegMenuPage from "./pages/VegMenuPage";

import HomePage from "./pages/HomePage";

import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";

import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";
import PaymentPage from "./pages/PaymentPage";
function App() {
   const [cart, setCart] = useState({
   
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
         <Route path="/menu/veg" element={<VegMenuPage />} />
           <Route path="/cart" element={<CartPage cart={cart} />} />
           <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/payment" element={<PaymentPage />} /> 
         
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
