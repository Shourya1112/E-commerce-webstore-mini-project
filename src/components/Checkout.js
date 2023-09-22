// Checkout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/checkout.css"

const Checkout = (props) => {
    const checkoutShow = props.checkoutShow;
    const setCheckoutShow = props.setCheckoutShow

  // State for shipping and payment information
  const [shippingInfo, setShippingInfo] = useState({
    // Initialize with default shipping information
    fullName: '',
    address: '',
    // Add other shipping fields as needed
  });

  const [paymentInfo, setPaymentInfo] = useState({
    // Initialize with default payment information
    cardNumber: '',
    expirationDate: '',
    // Add other payment fields as needed
  });

    const handleShippingInfoChange = (e) => {
    // Update shipping information state
    const { name, address, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value, [address]: value });
};

  const handlePaymentInfoChange = (e) => {
    // Update payment information state
    // const { name, value } = e.target;
    // setPaymentInfo({ ...paymentInfo, [name]: value });
  const { name, value } = e.target;

  if (name === 'cardNumber') {
    // Validate and format the card number (strip non-numeric characters)
    const formattedCardNumber = value.replace(/[^0-9]/g, '');

    if (formattedCardNumber.length <= 16) {
      // Check if the card number has not exceeded 16 digits (typical card length)
      setPaymentInfo({ ...paymentInfo, [name]: formattedCardNumber });
    }
  } else if (name === 'expirationDate') {
    // Validate and format the expiration date
    const formattedDate = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (formattedDate.length <= 4) {
      // Check if the date has not exceeded 4 characters (MMYY format)
      setPaymentInfo({ ...paymentInfo, [name]: formattedDate });
    }
  } else {
    // For other payment fields, update directly
    setPaymentInfo({ ...paymentInfo, [name]: value });
};

  };

  const handlePlaceOrder = () => {
    // Implement order placement logic here
    // You can calculate the total cost, apply discounts, and finalize the order
    // For simplicity, let's assume the order is placed successfully
   
        alert('Order placed successfully!');
  };

  return (
    <div className='checkout'>
      {/* Shipping Information Form */}
      <h3 className='checkout-heading'>Shipping Information</h3>
      <form>
        <div className='checkout-inputs'>
          <label htmlFor="fullName" className='checkout-label'>Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleShippingInfoChange}
            className='checkout-input'
          />
        </div>
        <div className='checkout-inputs'>
          <label htmlFor="address" className='checkout-label'>Shipping Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleShippingInfoChange}
            className='checkout-input'
          />
        </div>
        {/* Add other shipping fields as needed */}
      </form>

      {/* Payment Information Form */}
      <h3 className='checkout-heading'>Payment Information</h3>
      <form>
        <div className='checkout-inputs'>
          <label htmlFor="cardNumber" className='checkout-label'>Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentInfoChange}
            className='checkout-input'
          />
        </div>
        <div className='checkout-inputs'>
          <label htmlFor="cardExpiry" className='checkout-label'>Card Expiration:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handlePaymentInfoChange}
            className='checkout-input'
          />
        </div>
        {/* Add other payment fields as needed */}
      </form>

      <div onClick={handlePlaceOrder} className='order-btn'>Place Order</div>
      <p onClick={() => setCheckoutShow(!checkoutShow)}>Back to Cart</p>
    </div>
  );
};

export default Checkout;
