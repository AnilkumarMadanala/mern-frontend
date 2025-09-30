import React, { useEffect } from "react";
import "../styles/PaymentPage.css";

function PaymentPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890", // replace with Razorpay key
      amount: 50000, // in paise (500 = ₹5)
      currency: "INR",
      name: "SV Multicusine",
      description: "Test Payment",
      handler: function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@test.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-page">
      <h2>Complete Your Payment</h2>
      <button className="pay-btn" onClick={handlePayment}>
        Pay with Razorpay
      </button>
    </div>
  );
}

export default PaymentPage;
