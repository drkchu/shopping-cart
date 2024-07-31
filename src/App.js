import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Selections from './components/Selections';
import Checkout from './components/Checkout';


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
          <Route path="/" exact component={Home} />
          <Route path="/selections" component={Selections} />
          <Route path="/checkout" component={Checkout} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
