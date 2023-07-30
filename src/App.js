import React from 'react';
import Destination from './components/Destination';
import TravelCalculator from './components/TravelCalculator';

const destinations = [
  {
    name: 'Ibiza',
    country: 'España',
    description: 'Ibiza es conocida por su vida nocturna vibrante y hermosas playas.'
  },
  // Agrega más destinos aquí
];

function App() {
  return (
    <>
      <h1>Destinos de Verano en Europa</h1>
      {destinations.map((destination, index) => (
        <Destination key={index} {...destination} />
      ))}
      <div>
      <TravelCalculator />
    </div>
    </>
  );
}

export default App;
