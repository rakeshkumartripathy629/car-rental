import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routing
import { locations } from '../data/Location'; // Assuming location data is available
import { cars } from '../data/Car'; // Assuming car data is available

const LocationDetailPage = () => {
  const { locationId } = useParams(); // Get location ID from URL
  const location = locations.find(loc => loc.id === locationId);
  const [selectedLocation, setSelectedLocation] = useState(locationId || '');

  const filteredCars = selectedLocation
    ? cars.filter(car => car.location === selectedLocation) // Filter cars by location
    : cars;

  const handleLocationClick = (locationName) => {
    setSelectedLocation(locationName); // Set the selected location
  };

  return (
    <div className="container mx-auto p-6">
      {location ? (
        <>
          <h1 className="text-3xl font-semibold text-center mb-8">{location.name}</h1>
          <p className="text-center text-lg text-gray-600">{location.address}</p>

          {/* Location Selection Buttons */}
          <div className="mt-6 mb-4 flex justify-center space-x-4">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleLocationClick(loc.name)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {loc.name}
              </button>
            ))}
          </div>

          {/* Available Cars at Selected Location */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Available Cars at {selectedLocation}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars
                .filter(car => car.location === selectedLocation) // Ensure we filter by location
                .map((car) => (
                  <div key={car.id} className="car-card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
                      <p className="text-gray-600 mt-2">Brand: {car.brand}</p>
                      <p className="text-gray-600 mt-2">Price per day: ${car.price}</p>
                      <p className="text-gray-600 mt-2">Fuel Type: {car.fuelType}</p>
                      <p className="text-gray-600 mt-2">Mileage: {car.mileage}</p>
                      <div className="mt-4">
                        <button
                          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <p>Location not found.</p>
      )}
    </div>
  );
};

export default LocationDetailPage;
