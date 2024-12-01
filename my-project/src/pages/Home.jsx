import React from 'react';
import Hero from '../components/Hero';
import CarList from '../components/CarList';
import Features from '../components/Features';
import CarBrandList from '../components/CarBrandList'; 

export default function Home() {
  return (
    <div>
      <Hero />
      <CarList />
      <Features />
      <CarBrandList />
    </div>
  );
}