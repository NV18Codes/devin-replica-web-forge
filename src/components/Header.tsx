import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f44]/95 backdrop-blur-sm border-b border-blue-900">
      <div className="container-clean">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-1">
            <img
              src="src/Blue Logo no bg.png" // <-- Make sure this path is correct
              alt="ClosedLoop Logo"
              className="h-14 w-60 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {['/', '/about', '/services', '/contact'].map((path, idx) => {
              const label = ['Home', 'About', 'Services', 'Contact'][idx];
              return (
                <Link
                  key={label}
                  to={path}
                  className="px-2 py-1 text-blue-100 border-b-2 border-transparent hover:border-blue-300 hover:text-white transition-all duration-200 font-medium"
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-blue-200 hover:bg-blue-800/30 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-800 py-4 animate-fade-in bg-[#0a1f44]">
            {['/', '/about', '/services', '/contact'].map((path, idx) => {
              const label = ['Home', 'About', 'Services', 'Contact'][idx];
              return (
                <Link
                  key={label}
                  to={path}
                  className="px-4 py-3 text-blue-100 border-b border-transparent hover:border-blue-300 hover:text-white transition-all duration-200 font-medium"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
