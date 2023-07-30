import React from 'react';

const Destination = ({ name, country, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>País:</strong> {country}</p>
      <p>{description}</p>
    </div>
  );
};

export default Destination;
