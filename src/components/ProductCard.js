import React, { useState } from 'react';
import '../styles/productCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleInputChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <div className="product-tags">
        <span>{product.category}</span>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <input 
          type="number" 
          value={quantity} 
          onChange={handleInputChange}
          min="0"
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
