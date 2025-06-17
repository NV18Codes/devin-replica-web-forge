
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in font-inter">
              <span className="block text-white hover:text-blue-400 transition-colors duration-300 cursor-default">
                ClosedLoop
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-6 hover:text-blue-300 transition-colors duration-300 cursor-default animate-fade-in font-inter" style={{ animationDelay: '0.2s' }}>
              Looping Into the Future of Entertainment
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 animate-fade-in font-inter" style={{ animationDelay: '0.4s' }}>
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. 
              From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
            </p>

            {/* Call to action with rotating infinity */}
            <div className="mt-12 animate-fade-in font-inter" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl md:text-2xl text-white mb-6 font-semibold">
                Ready to Loop Into the Future?
              </p>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <span className="text-lg text-blue-300 hover:text-white transition-colors duration-300">
                  Join the ClosedLoop ecosystem and experience the future of entertainment management.
                </span>
                <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                  <Infinity 
                    size={32} 
                    className="text-gradient-infinity hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(45deg, #60a5fa, #1e40af)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Main Rotating Infinity Symbol */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative group cursor-pointer">
              {/* Main rotating infinity with gradient */}
              <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                <Infinity 
                  size={300} 
                  className="transition-all duration-700 hover:scale-110"
                  style={{
                    background: 'linear-gradient(45deg, #60a5fa, #1e40af, #1e3a8a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.5))'
                  }}
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
