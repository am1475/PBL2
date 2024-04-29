import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UniqueSection from './components/UniqueSection';
import FacilitiesSection from './components/FacilitiesSection';
import Footer from './components/Footer';
import FreeTestSection from './components/FreeTestSection'; // Import the FreeTestSection component

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>
          <HeroSection />
          <UniqueSection />
          <FacilitiesSection />
        </div>} />
        <Route path="/about" element={<FreeTestSection />} /> {/* Add route for /about */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
