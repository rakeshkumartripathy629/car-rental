import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Car, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Wrap the logo and text with Link to redirect to the home page */}
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LuxeWheels</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/find-cars" className="text-gray-600 hover:text-gray-900">
              Find Cars
            </Link>
            <Link to="/locations" className="text-gray-600 hover:text-gray-900">
              Locations
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/signin" className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <UserCircle className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
