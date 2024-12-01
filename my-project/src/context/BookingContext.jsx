import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    selectedCar: null,
    totalPrice: 0,
  });

  const updateBooking = (details) => {
    setBookingDetails((prev) => ({ ...prev, ...details }));
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);