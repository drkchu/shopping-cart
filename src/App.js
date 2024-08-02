import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Selections from './components/Selections';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import './styles/styles.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/selections">Selections</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
          <div className="cart-icon">
            <Link to="/checkout">
              🛒<span className="cart-count">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selections" element={<Selections addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} removeFromCart = {removeFromCart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
