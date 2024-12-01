// // src/pages/Locations.jsx

// import React from 'react';
// import { locations } from '../data/Location'; // Assuming you've stored location data in a 'data' folder

// const Locations = () => {
//   return (
//     <div>
//       <h1>Our Locations</h1>
//       <div className="location-list">
//         {locations.map((location) => (
//           <div key={location.id} className="location-item">
//             <h2>{location.name}</h2>
//             <p>{location.address}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Locations;

import React, { useState } from 'react';
import { locations } from '../data/Location'; // Assuming you have the locations data
import { cars } from '../data/Car'; // Assuming you have the cars data
import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon

const LocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Handle the "View Available Cars" button click
  const handleViewCars = (locationName) => {
    setSelectedLocation(locationName); // Set selected location to filter cars
  };

  // Filter cars based on the selected location
  const filteredCars = selectedLocation
    ? cars.filter((car) => car.location === selectedLocation)
    : [];

  return (
    <div className="container mx-auto p-6">
      {!selectedLocation ? (
        <>
          <h1 className="text-3xl font-semibold text-center mb-8">Our Locations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                className="location-card bg-white border-2 border-blue-500 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"
              >
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{location.name}</h2>
                  <p className="text-gray-600 mt-2">{location.address}</p>
                  <div className="mt-4">
                    <button
                      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                      onClick={() => handleViewCars(location.name)}
                    >
                      View Available Cars
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setSelectedLocation(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Locations
          </button>
          <h2 className="text-3xl font-semibold text-center mb-8">
            Available Cars at {selectedLocation}
          </h2>

          {/* Display filtered cars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="car-card bg-white border-2 border-blue-300 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-gray-600 mt-2">Brand: {car.brand}</p>
                    <p className="text-gray-600 mt-2">Price per day: ${car.price}</p>
                    <p className="text-gray-600 mt-2">Fuel Type: {car.fuelType}</p>
                    <div className="mt-4">
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No cars available at this location.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LocationPage;
