import React from 'react';
import '../styles/selections.css';

const Selections = () => {
  return (
    <div className="selections-container">
      <div className="filter-sidebar">
        <h2>Filters</h2>
        <div className="filter-section">
          <h3>Taste</h3>
          <label><input type="checkbox" /> Sweet</label>
          <label><input type="checkbox" /> Salty</label>
          <label><input type="checkbox" /> Spicy</label>
        </div>
        <div className="filter-section">
          <h3>Region</h3>
          <label><input type="checkbox" /> Asia</label>
          <label><input type="checkbox" /> Europe</label>
          <label><input type="checkbox" /> America</label>
        </div>
      </div>
      <div className="items-display">
        <h2>Available Items</h2>
        <div className="items-grid">
          <div className="food-item">Food Item 1</div>
          <div className="food-item">Food Item 2</div>
          <div className="food-item">Food Item 3</div>
          {/* Placeholder for future items */}
        </div>
      </div>
    </div>
  );
};

export default Selections;
