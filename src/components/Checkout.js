import React from 'react';
import '../styles/checkout.css';

const Checkout = ({ cart, removeFromCart }) => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Category: {item.category}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
