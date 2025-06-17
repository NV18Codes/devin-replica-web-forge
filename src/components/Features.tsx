
import React from 'react';
import { Users, Star, Zap, Target, Heart, Rocket } from 'lucide-react';

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
    <section className="section-padding bg-white">
      <div className="container-clean">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-heading">
            What We Offer
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            At ClosedLoop, we provide a fully integrated suite of services designed to support artists, 
            brands, and event organizers at every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-clean group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-900 text-white p-3 rounded-xl w-fit mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-heading">{feature.title}</h3>
              <p className="text-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-heading">
            Ready to Loop Into the Future?
          </h3>
          <p className="text-xl mb-8 text-body max-w-2xl mx-auto">
            Join the ClosedLoop ecosystem and experience the future of entertainment management.
          </p>
          <div className="flex justify-center">
            <button className="btn-primary cursor-loop">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
