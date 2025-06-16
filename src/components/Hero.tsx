
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive hexagonal dark background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.05'%3e%3cpolygon points='30 0 45 15 45 45 30 60 15 45 15 15'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/90 to-purple-900/40"></div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          <span className="block text-white">Welcome to</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            ClosedLoop
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-6">
          Looping Into the Future of Entertainment
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. 
          From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold">
            <Play className="w-5 h-5" />
            <span>Watch Our Work</span>
          </button>
        </div>

        {/* Vision and Mission Preview */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To redefine Live Event space by creating a seamless loop between talent, opportunity, and audience experiences.
            </p>
          </div>
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower talent through full-spectrum artist management, strategic partnerships, and immersive entertainment experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
