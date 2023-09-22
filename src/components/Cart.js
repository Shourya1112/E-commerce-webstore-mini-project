import React, { useState} from 'react';
import Header from './Header';
import Checkout from './Checkout';
import backIcon from "../assets/back.svg";
import removeIcon from "../assets/close_FILL0_wght400_GRAD0_opsz48.png"
import { useNavigate } from 'react-router-dom';
import "../styles/cart.css";

const Cart = (props) => {
    //  const { cartItems, setCartItems } = props;
     const cartItems = props.cartItems;
     const setCartItems = props.setCartItems

    // Get the navigate function
    const navigate = useNavigate();

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice.toFixed(2);
  };

  // Function to calculate the shipping date (3 days later from today)
  const calculateShippingDate = () => {
    const today = new Date();
    const shippingDate = new Date(today);
    shippingDate.setDate(today.getDate() + 3);
    return shippingDate.toDateString();
  };

  const [checkoutShow, setCheckoutShow] = useState(false);

  const checkout = () => {
    if (checkoutShow) {
        return (
            <div className='cart-summary'>
            <h2 className='summary-text'>Checkout</h2>
                <Checkout 
                    checkoutShow={checkoutShow}
                    setCheckoutShow={setCheckoutShow}
                />
        </div>
        )
    } else {
        return (
            <div className='cart-summary'>
            <h2 className='summary-text'>Order Summary</h2>
            <div className='summary-item'>
                <h3 className='summary-title'>Price</h3>
                <h3 className='summary-info'>${calculateTotalPrice()}</h3>
            </div>
            <div className='summary-item'>
                <h3 className='summary-title'>shipping</h3>
                <h3 className='summary-info'>Free</h3>
            </div>
            <div className='divider'></div>
            <div className='summary-item'>
                <h3 className='summary-title'>Total</h3>
                <h3 className='summary-info'>${calculateTotalPrice()}</h3>
            </div>
            <div className='summary-item'>
                <h3 className='summary-title'>Estimated Delivery</h3>
                <h3 className='summary-info'>{calculateShippingDate()}</h3>
            </div>
            <div className='order-btn' onClick={() => setCheckoutShow(!checkoutShow)}>Proceed to Checkout</div>
        </div>
        )
    }
  }


  const cartPage = () => {
    if (cartItems && cartItems.length > 0) {
      return (
        <div className='cart-layout'>
        <div className='useless-div'>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
                <img 
                    // key={item.id}
                    src={removeIcon} 
                    alt='remove from cart'
                    className='remove-icon' 
                    onClick={() => removeFromCart(item.id)}
                />
                <div className='cart-item-image-div'>
                <img 
                    src={item.image} 
                    alt={item.title}
                    className="cart-item-image" 
                />
                </div>
                <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <p className='cart-item-quantity'>Quantity: {item.quantity}</p>
                </div>
            </div>
        ))}
        </div>
        {checkout()}
    </div>
    );
    } else {
        return <p className='cart-empty-text'>Your cart is empty.</p>;
    }
};
            
            
return (
    <div>
      <Header />
      <div className="cart-page">
        <img
          src={backIcon}
          alt="back"
          className="back-btn"
          onClick={() => navigate(`/`)}
        />
        <div className="cart-items">
            <h2 className="cart-text">Cart</h2>
            {cartPage()}
        </div>
      </div>
    </div>
  )
}

export default Cart;

// <div className='summary-item'>
//                 <h3 className='summary-title'>Discount</h3>
//                 <h3 className='summary-info'>{matchDiscountCode}</h3>
//             </div>