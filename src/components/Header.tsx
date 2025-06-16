
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800 hover:bg-black/95 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black text-white hover:text-purple-400 transition-all duration-300 hover:scale-110 transform">
              ClosedLoop
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 py-6 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-2 transform">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-2 transform">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-2 transform">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-2 transform">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
