// src/components/Home.js
import React from 'react';
import '../styles/home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Enjoy your meal!</h1>
      <p className="description">
        Discover our specially curated selection of things that Derek (the creator of this site) is craving.
      </p>
      <button className="shop-button">Shop now</button>
      <div className="scrolling-window">
        <div className="food-item">🍕</div>
        <div className="food-item">🥗</div>
        <div className="food-item">🍦</div>
        <div className="food-item">🍜</div>
        <div className="food-item">🍿</div>
      </div>
    </div>
  );
};

export default Home;
