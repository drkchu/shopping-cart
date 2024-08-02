import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleShopNowClick = () => {
    navigate('/selections');
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth / 2;
    
    if (carousel.scrollLeft >= maxScrollLeft) {
      // Reset to start for right scrolling
      carousel.scrollLeft -= maxScrollLeft * 1/2;
    } else if (carousel.scrollLeft === 0) {
      // Reset to end for left scrolling
      carousel.scrollLeft += maxScrollLeft * 1/2;
    }
  };

  return (
    <div className="home-container">
      <h1>Enjoy your meal!</h1>
      <p className="description">
        Discover our specially curated selection of things that Derek (the creator of this site) is craving.
      </p>
      <button className="shop-button" onClick={handleShopNowClick}>
        Shop now
      </button>
      <div className="carousel" ref={carouselRef} onScroll={handleScroll}>
        <div className="carousel-track">
          <div className="food-item">🍕</div>
          <div className="food-item">🥗</div>
          <div className="food-item">🍦</div>
          <div className="food-item">🍜</div>
          <div className="food-item">🍿</div>
          <div className="food-item">🍔</div>
          {/* Duplicated items for seamless transition */}
          <div className="food-item">🍕</div>
          <div className="food-item">🥗</div>
          <div className="food-item">🍦</div>
          <div className="food-item">🍜</div>
          <div className="food-item">🍿</div>
          <div className="food-item">🍔</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
