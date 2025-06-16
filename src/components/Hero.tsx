
import React from 'react';
import { ArrowRight, Code, Zap, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center space-x-4 opacity-80">
          <div className="p-3 bg-blue-100 rounded-full animate-bounce delay-100">
            <Code className="w-6 h-6 text-blue-600" />
          </div>
          <div className="p-3 bg-purple-100 rounded-full animate-bounce delay-200">
            <Brain className="w-6 h-6 text-purple-600" />
          </div>
          <div className="p-3 bg-pink-100 rounded-full animate-bounce delay-300">
            <Zap className="w-6 h-6 text-pink-600" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Meet Devin
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          The world's first fully autonomous
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          AI Software Engineer
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Devin can plan and execute complex engineering tasks requiring thousands of decisions. 
          With advanced reasoning capabilities, long-term planning, and the ability to learn and 
          improve over time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold">
            <span>Experience Devin</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-lg font-semibold">
            Watch Demo
          </button>
        </div>

        {/* Code preview mockup */}
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gray-800 px-6 py-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-4 text-gray-400 text-sm">devin-terminal</div>
          </div>
          <div className="p-6 text-left">
            <div className="text-green-400 mb-2">$ devin --task "Build a full-stack web application"</div>
            <div className="text-blue-400 mb-1">🤖 Analyzing requirements...</div>
            <div className="text-blue-400 mb-1">📋 Creating project structure...</div>
            <div className="text-blue-400 mb-1">⚡ Setting up database...</div>
            <div className="text-blue-400 mb-1">🎨 Implementing frontend...</div>
            <div className="text-green-400">✅ Application deployed successfully!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
