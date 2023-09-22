import React from 'react'
import Carousel from './Carousel'
import Cards from './Cards'
import Header from './Header'

const Home = (props) => {
    const products = props.products;
    const setCurrentProduct = props.setCurrentProduct;

  return (
    <div>
        <Header/>
        <Carousel />
        {/* Display cards when products are available, otherwise show loading message */}
        {products.length ? <Cards products={products} /> : <p>Loading...</p>}
    </div>
  )
}

export default Home