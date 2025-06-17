
import React from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in">
              <span className="block text-white hover:text-blue-400 transition-colors duration-300 cursor-default">
                ClosedLoop
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-6 hover:text-blue-300 transition-colors duration-300 cursor-default animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Looping Into the Future of Entertainment
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. 
              From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
            </p>
          </div>

          {/* Right side - Rotating Infinity Symbol */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Main rotating infinity */}
              <div className="animate-infinity-rotate">
                <Infinity 
                  size={300} 
                  className="text-blue-500 hover:text-blue-300 transition-all duration-700 cursor-pointer"
                />
              </div>
              
              {/* Orbiting smaller infinities */}
              <div className="absolute inset-0 animate-orbit">
                <Infinity 
                  size={60} 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-blue-400 transition-colors duration-500"
                />
              </div>
              
              <div className="absolute inset-0 animate-orbit-reverse">
                <Infinity 
                  size={40} 
                  className="absolute -bottom-6 right-8 text-blue-400/80 hover:text-white transition-colors duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
