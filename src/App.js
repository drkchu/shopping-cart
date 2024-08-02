import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Selections from './components/Selections.js';
import Checkout from './components/Checkout.js';
import NotFound from './components/NotFound.js'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/selections">Selections</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selections" element={<Selections />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
