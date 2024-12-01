// src/components/CarBrandList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/Car';
import { carLogos } from '../data/carLogos'; // Import car logos

export default function CarBrandList() {
  return (
    <div
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: 'url(https://path-to-your-background-image.jpg)' }} // Replace with your image URL
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Car Brands</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => {
            // Retrieve logo URL based on the car brand
            const logoUrl = carLogos[car.brand];

            return (
              <Link
                key={car.id}
                to={`/find-cars/${car.brand}`} // Pass brand name as URL parameter
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center border hover:bg-blue-500 hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                <div className="text-center">
                  {/* Display car brand logo */}
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={car.brand}
                      className="w-16 h-16 object-contain mx-auto mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white">No Logo</span>
                    </div>
                  )}
                  <div className="text-lg font-semibold text-gray-900 hover:text-white">
                    {car.brand}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
