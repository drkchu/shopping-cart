import React from 'react';
import '../styles/checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Order Summary</h1>
      <div className="order-list">
        <div className="order-item">Food Item 1 - Quantity: X - Price: $Y</div>
        <div className="order-item">Food Item 2 - Quantity: X - Price: $Y</div>
      </div>
      <div className="order-total">
        <h2>Total: $ABC</h2>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
