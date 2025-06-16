
import React from 'react';
import { Code2, Brain, Zap, Target, Users, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced Reasoning",
      description: "Devin can reason through complex problems, make decisions, and learn from mistakes."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "From planning to deployment, Devin handles the entire software development lifecycle."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Long-term Planning",
      description: "Capable of planning and executing complex engineering tasks with thousands of decisions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Execution",
      description: "Complete projects in minutes that would typically take hours or days."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative AI",
      description: "Works alongside human developers, enhancing productivity and creativity."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Improves over time, learning from each project and interaction."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Devin represents a breakthrough in AI software engineering, capable of handling 
            complex development tasks with unprecedented autonomy and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-3 rounded-xl w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Development Process?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the future of software engineering with Devin's autonomous AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
              Request Access
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
