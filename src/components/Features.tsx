
import React from 'react';
import { Users, Star, Zap, Target, Heart, Rocket, Infinity } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Artist Management",
      description: "Comprehensive career development and strategic planning for emerging and established talent."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Talent Booking",
      description: "Connect with top-tier performers for events, campaigns, and brand collaborations."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Event Production",
      description: "Full-service event conceptualization, planning, and flawless execution from start to finish."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Partnerships",
      description: "Authentic collaborations that amplify both artist identity and brand messaging."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Media & PR",
      description: "Strategic publicity campaigns and reputation management to elevate your brand presence."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "End-to-End Solutions",
      description: "Complete entertainment ecosystem under one roof, from concept to curtain call."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Background infinity pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-12 h-full w-full p-8">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
            >
              <Infinity 
                size={32} 
                className="text-white animate-infinity-spin" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 cursor-default animate-gradient">
            What We Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
            At ClosedLoop, we provide a fully integrated suite of services designed to support artists, 
            brands, and event organizers at every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800/60 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group cursor-pointer animate-pulse-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
            Ready to Loop Into the Future?
          </h3>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
            Join the ClosedLoop ecosystem and experience the future of entertainment management.
          </p>
          <div className="flex justify-center">
            <Infinity className="w-12 h-12 text-purple-400 animate-infinity-spin group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
