import React, { useState, useEffect } from 'react';
import { Shield, Clock, MapPin, Phone, CreditCard, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Fully Insured',
      description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.',
      link: '/features/fully-insured', // Example link
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.',
      link: '/features/24-7-support',
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: 'Multiple Locations',
      description: 'Convenient pickup and drop-off locations across the city.',
      link: '/features/multiple-locations',
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: 'Easy Booking',
      description: 'Simple and quick online booking process with instant confirmation.',
      link: '/features/easy-booking',
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: 'Secure Payment',
      description: 'Enjoy secure and easy payment methods for your bookings.',
      link: '/features/secure-payment',
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: 'Simple Booking Process',
      description: 'Book your vehicle with a seamless process in just a few clicks.',
      link: '/features/simple-booking',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the slide every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [features.length]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>

        {/* Features Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Move the carousel by 100/3% for each slide
            }}
          >
            {/* Render 3 cards at a time */}
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link} // Navigate to the specific feature page
                className="flex-none w-1/3 p-6 rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
