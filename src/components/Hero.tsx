
import React from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="container-clean z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in text-white">
              ClosedLoop
            </h1>
            
            {/* Subtitle with blue color */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-blue mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Looping Into the Future of Entertainment
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. 
              From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
            </p>

            {/* Call to action with rotating infinity */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl md:text-2xl text-white mb-6 font-semibold">
                Ready to Loop Into the Future?
              </p>
              <div className="flex items-center space-x-4 group cursor-loop">
                <span className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
                  Join the ClosedLoop ecosystem and experience the future of entertainment management.
                </span>
                <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                  <Infinity 
                    size={32} 
                    className="infinity-gradient hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Main Rotating Infinity Symbol */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative group cursor-loop">
              {/* Main rotating infinity with gradient */}
              <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                <Infinity 
                  size={300} 
                  className="infinity-gradient transition-all duration-700 hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))'
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
