import React, { useState, useEffect } from 'react';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import "./styles/app.css";
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from "./components/Footer";

const App = () => {
  // State for controlling login visibility
  const [login, setLogin] = useState(false);

  // State to store the items in the cart
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
    console.log(cartItems);

  // Update localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // State for storing products data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products and handle cache
    const fetchProducts = async () => {
      try {
        const cachedData = localStorage.getItem('cachedProducts');
        if (cachedData) {
          setProducts(JSON.parse(cachedData));
        } else {
          const response = await fetch('https://fakestoreapi.com/products/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setProducts(jsonData);
          localStorage.setItem('cachedProducts', JSON.stringify(jsonData));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route 
              path="/" 
              element={<Home products={products}/>}
            />
            <Route 
              path="/product/:id" 
              element={<Product 
                cartItems={cartItems} 
                setCartItems={setCartItems}/>}
            />
            <Route 
              path="/cart" 
              element={<Cart 
                cartItems={cartItems} 
                setCartItems={setCartItems}/>} 
            />
            <Route 
              path='/login'
              element={<Login />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
