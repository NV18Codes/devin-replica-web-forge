
import React from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated hexagonal background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center animate-pulse hover:animate-spin transition-all duration-500 hover:scale-150 hover:opacity-80"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            >
              <Infinity 
                size={20} 
                className="text-navy-900/20 hover:text-blue-500/60 transition-colors duration-500 cursor-pointer transform hover:rotate-180" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/90 to-navy-900/10 animate-pulse"></div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-900/10 rounded-full blur-3xl animate-blob-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in">
              <span className="block text-navy-900 hover:text-blue-600 transition-colors duration-300 cursor-default">
                ClosedLoop
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 hover:text-navy-900 transition-colors duration-300 cursor-default animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Looping Into the Future of Entertainment
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed hover:text-navy-900 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
                  className="text-blue-500 hover:text-navy-900 transition-all duration-700 cursor-pointer drop-shadow-2xl"
                />
              </div>
              
              {/* Orbiting smaller infinities */}
              <div className="absolute inset-0 animate-orbit">
                <Infinity 
                  size={60} 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-navy-900/70 hover:text-blue-600 transition-colors duration-500"
                />
              </div>
              
              <div className="absolute inset-0 animate-orbit-reverse">
                <Infinity 
                  size={40} 
                  className="absolute -bottom-6 right-8 text-blue-600/80 hover:text-navy-900 transition-colors duration-500"
                />
              </div>
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 animate-pulse-glow opacity-20">
                <Infinity 
                  size={320} 
                  className="text-blue-400"
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
