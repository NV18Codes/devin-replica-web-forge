
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 hover:from-cyan-400 hover:to-purple-400 transition-all duration-500 cursor-default animate-gradient">
              ClosedLoop
            </div>
            <p className="text-gray-400 mb-6 max-w-md hover:text-gray-300 transition-colors duration-300">
              An entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. 
              Looping into the future of entertainment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 group">
                <Github className="w-5 h-5 group-hover:animate-spin" />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              </a>
              <a href="#" className="bg-gray-800/50 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 group">
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          <div className="group">
            <h3 className="text-lg font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Artist Management</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Event Production</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Talent Booking</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Brand Partnerships</Link></li>
            </ul>
          </div>

          <div className="group">
            <h3 className="text-lg font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Contact</Link></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <Infinity className="w-5 h-5 text-purple-400 animate-infinity-spin" />
              <p className="text-gray-400 text-sm">
                © 2024 ClosedLoop. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-110 transform">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-110 transform">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-110 transform">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
