
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="text-2xl font-black text-gray-900">
              Devin
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#capabilities" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Capabilities</a>
            <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Case Studies</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium">
              Request access
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 py-6">
            <nav className="flex flex-col space-y-4">
              <a href="#capabilities" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Capabilities</a>
              <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Case Studies</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium w-fit">
                Request access
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
