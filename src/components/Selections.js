import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import '../styles/selections.css';

const Selections = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['Seafood', 'Dessert', 'Vegetarian', 'Chicken', 'Beef', 'Breakfast'];
        const requests = categories.map(category =>
          axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        );

        const responses = await Promise.all(requests);

        const meals = responses.flatMap(response => 
          response.data.meals.map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            image: meal.strMealThumb,
            category: response.config.url.split('=')[1], // Extract category from URL
          }))
        );

        setProducts(meals);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    if (categoryFilter === 'All') return true;
    return product.category === categoryFilter;
  });

  return (
    <div className="selections-container">
      <h1>Selections</h1>
      <div className="category-filter">
        <label>
          <input
            type="radio"
            name="category"
            value="All"
            checked={categoryFilter === 'All'}
            onChange={() => setCategoryFilter('All')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Seafood"
            checked={categoryFilter === 'Seafood'}
            onChange={() => setCategoryFilter('Seafood')}
          />
          Seafood
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Dessert"
            checked={categoryFilter === 'Dessert'}
            onChange={() => setCategoryFilter('Dessert')}
          />
          Dessert
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Vegetarian"
            checked={categoryFilter === 'Vegetarian'}
            onChange={() => setCategoryFilter('Vegetarian')}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Chicken"
            checked={categoryFilter === 'Chicken'}
            onChange={() => setCategoryFilter('Chicken')}
          />
          Chicken
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Beef"
            checked={categoryFilter === 'Beef'}
            onChange={() => setCategoryFilter('Beef')}
          />
          Beef
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Breakfast"
            checked={categoryFilter === 'Breakfast'}
            onChange={() => setCategoryFilter('Breakfast')}
          />
          Breakfast
        </label>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Selections;
