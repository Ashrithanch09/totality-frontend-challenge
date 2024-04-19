import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div>
      <h1>Welcome to Totallity Rentals</h1>
      <p>
        Find your perfect property for rent! Whether you're looking for a cozy
        cabin in the woods, a luxurious villa with a pool, or anything in
        between, Totallity Rentals has you covered. Start your search today!
      </p>
      <Link to="/property-listings">
        <button  className="btn">View Properties</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;