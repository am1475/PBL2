import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">Mental Wellness Hub</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-blue-500">About</Link>
        <Link to="/contact" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
