
import React from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive infinity background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center animate-pulse hover:animate-bounce transition-all duration-500 hover:scale-150 hover:opacity-80"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            >
              <Infinity 
                size={24} 
                className="text-white/10 hover:text-purple-400/50 transition-colors duration-300 cursor-pointer transform hover:rotate-45" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/90 to-purple-900/40 animate-pulse"></div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in">
          <span className="block text-white hover:text-gray-300 transition-colors duration-300 cursor-default">Welcome to</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 cursor-default">
            ClosedLoop
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-6 hover:text-white transition-colors duration-300 cursor-default animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Looping Into the Future of Entertainment
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed hover:text-gray-300 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. 
          From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
        </p>

        {/* Vision and Mission Preview */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm hover:bg-gray-800/60 hover:border-purple-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              To redefine Live Event space by creating a seamless loop between talent, opportunity, and audience experiences.
            </p>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm hover:bg-gray-800/60 hover:border-cyan-500/50 hover:scale-105 transition-all duration-500 cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              To empower talent through full-spectrum artist management, strategic partnerships, and immersive entertainment experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
