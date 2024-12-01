// src/pages/About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00Pf1UIS9bl8q3z2wL2s9R6aJ2wmxW0ZOKA&s)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">About Us</h1>
        
        <p className="text-lg text-white text-center mb-12 drop-shadow-lg">
          Welcome to our car rental service! We provide a wide range of vehicles for your convenience. Whether you're going on a road trip or need a car for business, we have you covered!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Our goal is to offer top-quality rental cars with excellent customer service. We aim to make your travel experience smooth and affordable.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 text-lg mb-2">
              <strong>Email:</strong> <a href="mailto:support@carrental.com" className="text-blue-600 hover:text-blue-800">support@carrental.com</a>
            </p>
            <p className="text-gray-600 text-lg">
              <strong>Phone:</strong> <span className="text-blue-600 hover:text-blue-800">+1 (800) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
