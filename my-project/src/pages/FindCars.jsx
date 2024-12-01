

import React from 'react';
import { cars } from '../data/Car'; // Assuming you've stored the car data in a 'data' folder

const FindCars = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Find Your Perfect Car</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="car-card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
              <p className="text-gray-600 mt-2">Brand: {car.brand}</p>
              <p className="text-gray-600 mt-2">Price per day: <span className="font-semibold text-blue-600">${car.price}</span></p>
              <p className="text-gray-600 mt-2">Seats: {car.seats}</p>
              <p className="text-gray-600 mt-2">Fuel Type: {car.fuelType}</p>
              <div className="mt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindCars;
