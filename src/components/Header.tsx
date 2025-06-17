
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-all duration-300 font-inter">
              ClosedLoop
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-black transition-all duration-300 font-medium relative group font-inter">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-black transition-all duration-300 font-medium relative group font-inter">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-black transition-all duration-300 font-medium relative group font-inter">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium font-inter">
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-black transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-black transition-all duration-300 font-medium font-inter">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-black transition-all duration-300 font-medium font-inter">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-black transition-all duration-300 font-medium font-inter">Services</Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-all duration-300 font-medium font-inter">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
