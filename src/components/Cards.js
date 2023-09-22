import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/cards.css';

const Cards = ({ products, setCurrentProduct }) => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="cards-container">
      {products.map(product => (
        <div 
          key={product.id} 
          className="card" 
          onClick={() => navigate(`/product/${product.id}`)} // Navigate to the product page
        >
          <img src={product.image} alt={product.title} className="card-image" />
          <div className="card-details">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-price">${product.price}</p>
            {/* You can add more details here */}
          </div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;