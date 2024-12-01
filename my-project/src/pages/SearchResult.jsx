import React from 'react';
import { useBooking } from '../context/BookingContext';
import { cars } from '../data/Car';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function SearchResults() {
  const { bookingDetails, updateBooking } = useBooking();
  const navigate = useNavigate();

  const handleSelectCar = (car) => {
    const days = Math.ceil(
      (new Date(bookingDetails.dropoffDate) - new Date(bookingDetails.pickupDate)) / 
      (1000 * 60 * 60 * 24)
    );
    
    updateBooking({
      selectedCar: car,
      totalPrice: car.price * days
    });
    
    navigate('/booking');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Search Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Pickup Location</p>
            <p className="font-semibold">{bookingDetails.pickupLocation}</p>
          </div>
          <div>
            <p className="text-gray-600">Pickup Date</p>
            <p className="font-semibold">
              {format(new Date(bookingDetails.pickupDate), 'PPP')}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">{car.brand}</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-blue-600">${car.price}/day</p>
              </div>
              <button
                onClick={() => handleSelectCar(car)}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Select This Car
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}