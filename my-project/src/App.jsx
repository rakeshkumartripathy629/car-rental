

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResult';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import FindCars from './pages/FindCars'; // Import FindCars page
import Locations from './pages/Locations'; // Import Locations page
import About from './pages/About Page'; // Import About page
import SignIn from './pages/SignIn'; // Import SignIn page
import { BookingProvider } from './context/BookingContext';
import LocationDetailPage from './pages/LocationDetailPage';
import CarBrandList from './components/CarBrandList';
import CarDetails from './pages/FindCars';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<CarBrandList />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/find-cars" element={<FindCars />} /> {/* Added FindCars route */}
            <Route path="/locations" element={<Locations />} /> {/* Added Locations route */}
            <Route path="/location/:locationId" element={<LocationDetailPage />} /> 
            <Route path="/about" element={<About />} /> {/* Added About route */}
            <Route path="/signin" element={<SignIn />} /> {/* Added SignIn route */}
            <Route path="/signup" element={<SignUp />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BookingProvider>
  );
}

export default App;
