import React, { useState } from "react";
import { properties } from "../data";
import PropertyCard from "../components/PropertyCard";

const PropertyListings = () => {
  const [filter, setFilter] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Properties..."
      />
      <div className="property-listings">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;