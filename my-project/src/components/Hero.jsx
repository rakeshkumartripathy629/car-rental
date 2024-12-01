import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { locations } from '../data/Location';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Hero() {
  const navigate = useNavigate();
  const { updateBooking } = useBooking();
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=2000',
    'https://i.pinimg.com/originals/a0/0c/9a/a00c9a11ef37d0e0d2782b6e9be60a55.png',
    'https://cdn.dribbble.com/userupload/12070032/file/original-5535ee056e5d6b54b69a444acbd20c44.jpg?resize=400x300&vertical=center',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBooking(formData);
    navigate('/search');
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover transition-opacity duration-1000 ease-in-out"
          src={heroImages[currentSlide]}
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gray-900/50"></div> {/* Reduced opacity for better visibility */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
            Premium Car Rental Experience
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 drop-shadow-md">
            Choose from our exclusive collection of luxury vehicles for your perfect journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
              <div className="mt-1 relative">
                <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <select
                  required
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                >
                  <option value="">Select location</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Dropoff Location</label>
              <div className="mt-1 relative">
                <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <select
                  required
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                >
                  <option value="">Select location</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
              <div className="mt-1 relative">
                <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  required
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Dropoff Date</label>
              <div className="mt-1 relative">
                <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  required
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.dropoffDate}
                  onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search Available Cars
          </button>
        </form>
      </div>
    </div>
  );
}
