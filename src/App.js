import React, { useState, useEffect } from 'react';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import "./styles/app.css";
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';
import Footer from "./components/Footer"

const App = () => {
  // State for controlling login visibility
  const [login, setLogin] = useState(false);

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
          const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
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

  console.log(products);

  return (
    <div className="App">
    <Header setTrigger={setLogin} />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home products={products}/>}/>
            <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Login Trigger={login} setTrigger={setLogin} />
    </div>
  );
}

export default App;
