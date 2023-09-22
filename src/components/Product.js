import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import heartIcon from "../assets/heart.svg";
import backIcon from "../assets/back.svg";
import Header from './Header';
import "../styles/product.css"

const Product = (props) => {
  const cartItems = props.cartItems;
  const setCartItems = props.setCartItems;

  // Get the product ID from the URL
  const { id } = useParams();

  // Get the navigate function
  const navigate = useNavigate();

  // State for storing the product data
  const [product, setProduct] = useState(null);

  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if(count > 1) {
      setCount(prev => prev - 1)
    }
  }
  
  const incrementCount = () => {
    if(count < 10) {
      setCount(prev => prev + 1)
    }
  }

  useEffect(() => {
    // Function to fetch the product details based on the ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setProduct(jsonData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch the product whenever the ID changes

  // Function to generate star icons based on the rating
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }

    if (halfStar) {
      stars.push(<span key="half" className="star">&#9733;&#189;</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">&#9734;</span>);
    }

    return stars;
  };

  // Function to add the current product to the cart with the selected quantity
  const addToCart = () => {
    // Check if the product is already in the cart based on its ID
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update its quantity
      setCartItems(prevItems => prevItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + count } : item
      ));
    } else {
      // If the product is not in the cart, add it with the selected quantity
      setCartItems(prevItems => [...prevItems, { ...product, quantity: count }]);
    }
  };

  // Render the product details when available
  return (
    <div>
    <Header />
    <div className='product-page'> 
      <img src={backIcon} alt='back' className='back-btn' onClick={() => navigate(`/`)}/>
      {product ? (
        <div className='product'>
          <img 
            src={product.image} 
            alt={product.title} 
            className='product-img'
          />
          <div className='product-info'>
          <div className='product-imp-info'>
            <h2 className='product-title'>{product.title}</h2>
            <div className='money-opinion'>
              <h1 className='product-price'>Price: ${product.price}</h1>
              <div className='ratings'>
                {renderStars(product.rating.rate)} 
                <h4 className='rating'>{product.rating.rate.toFixed(1)}/5.0</h4>
                <h4 className='rating-count'> ({product.rating.count})</h4>
              </div>
            </div>
          </div>
          <div className='btns'>
            <div className='product-quantity'>
              <p className='counter' onClick={decrementCount}>-</p>
              <p>{count}</p>
              <p className='counter' onClick={incrementCount}>+</p>
            </div>
            <div className='cart-btn' onClick={addToCart}>Add to Cart</div>
          </div>
            <h3 className='product-description'>{product.description}</h3>
            <h3 className='faltu-stuff'>Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</h3>
            <div className='wishlist'>
             <img src={heartIcon} alt='like' className='wish-icon' />
             Add to Wishlist
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default Product;