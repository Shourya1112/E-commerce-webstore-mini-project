import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

const Cards = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map(product => (
        <div key={product.id} className="card">
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
