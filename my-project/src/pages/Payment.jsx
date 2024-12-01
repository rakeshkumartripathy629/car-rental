import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';

// Import assets
import gpayLogo from '../assets/gPay.png';
import phonepeLogo from '../assets/images.png';
import paytmLogo from '../assets/image.png';

export default function Payment() {
  const { bookingDetails } = useBooking();
  const [selectedMethod, setSelectedMethod] = useState(null); // Track selected method for active form
  const [upiId, setUpiId] = useState('');
  const navigate = useNavigate(); // For redirection after payment

  const handlePayment = () => {
    if (selectedMethod === 'card') {
      alert('Payment via Card processed successfully!');
    } else if (selectedMethod === 'upi') {
      if (!upiId) {
        alert('Please enter your UPI ID.');
        return;
      }
      alert(`Payment via ${upiId} processed successfully!`);
    } else if (['gpay', 'phonepe', 'paytm'].includes(selectedMethod)) {
      alert(`Payment via ${selectedMethod.toUpperCase()} processed successfully!`);
    } else {
      alert('Please select a payment method.');
      return;
    }

    // Redirect to the Find Cars section after successful payment
    navigate('/find-cars');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Payment Options</h2>

        {/* Card Payment Section */}
        <div
          className={`p-4 border rounded-lg mb-4 ${
            selectedMethod === 'card' ? 'bg-blue-100 border-blue-600' : 'bg-white'
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setSelectedMethod('card')}
          >
            <h3 className="text-lg font-bold">Credit/Debit Card</h3>
            <span>💳</span>
          </div>
          {selectedMethod === 'card' && (
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* UPI Payment Section */}
        <div
          className={`p-4 border rounded-lg mb-4 ${
            selectedMethod === 'upi' ? 'bg-blue-100 border-blue-600' : 'bg-white'
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setSelectedMethod('upi')}
          >
            <h3 className="text-lg font-bold">UPI Payment</h3>
            <span>📱</span>
          </div>
          {selectedMethod === 'upi' && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter UPI ID (e.g., yourname@bank)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        {/* Google Pay, PhonePe, and Paytm Section */}
        <div className="grid grid-cols-3 gap-4">
          {[{ method: 'gpay', logo: gpayLogo }, { method: 'phonepe', logo: phonepeLogo }, { method: 'paytm', logo: paytmLogo }].map(({ method, logo }) => (
            <div
              key={method}
              className={`p-4 border rounded-lg flex items-center justify-center cursor-pointer ${
                selectedMethod === method ? 'bg-blue-100 border-blue-600' : 'bg-white'
              }`}
              onClick={() => setSelectedMethod(method)}
            >
              <img
                src={logo}
                alt={`${method} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
