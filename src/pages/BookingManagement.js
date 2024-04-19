
import React, { useState } from "react";
import { properties } from "../data";
import Cart from "../components/cart";
import CheckoutForm from "../components/CheckoutForm";
import "./BookingManagement.css";

const BookingManagement = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (property) => {
    setCartItems([...cartItems, property]);
  };

  const removeFromCart = (propertyId) => {
    setCartItems(cartItems.filter((item) => item.id !== propertyId));
  };

  return (
    <div className="back">
      <div className="card1">
        <div>
      <h1>Booking Management</h1>
      <div className="booking-section">
        <div className="property-listings">
          <h2>Available Properties</h2>
          {properties.map((property) => (
            <div key={property.id} className="card2">
              <p>{property.title}</p>
              <button onClick={() => addToCart(property)}>Book Now</button>
            </div>
        
          ))}
          </div>
        </div>
        </div>
        <div className="cart">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
      <div className="checkout-section">
        <h2>Checkout</h2>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default BookingManagement;