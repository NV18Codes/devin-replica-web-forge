import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Tickets', path: '/' }
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto rounded-2xl border border-blue-900 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-1">
            <img
              src="src\Blue Logo no bg.png"
              alt="ClosedLoop Logo"
              className="h-14 w-60 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                target={label === 'Tickets' ? '_blank' : '_self'}
                rel={label === 'Tickets' ? 'noopener noreferrer' : undefined}
                className="px-2 py-1 text-lg text-blue-300 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-200 transition-all duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
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
          <div className="md:hidden border-t border-blue-800 py-4 animate-fade-in bg-[#0a1f44]/90 rounded-b-2xl px-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                target={label === 'Tickets' ? '_blank' : '_self'}
                rel={label === 'Tickets' ? 'noopener noreferrer' : undefined}
                className="block py-2 text-blue-100 border-b border-transparent hover:border-blue-300 hover:text-white transition-all duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
