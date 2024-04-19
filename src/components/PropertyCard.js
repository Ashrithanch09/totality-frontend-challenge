import React from 'react';
import "./PropertyCard.css";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className='card'>
      
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <Link to="/booking-management">
        <button>Book Now</button>
      </Link>
      </div>
    </div>
  );
};

export default PropertyCard;