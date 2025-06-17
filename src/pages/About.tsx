
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Heart, Globe, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We prioritise transparency, trust, and professionalism in every relationship—with our artists, our clients, and our audiences. Allowing and helping artists to obtain the freedom to express themselves authentically."
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Innovation drives everything we do. We embrace bold ideas and push the boundaries of what's possible in entertainment. We aspire to be today's \"out of the box idea\" and tomorrow's \"core memory unlocked on a night I'll never forget\""
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We know and believe success is never a solo act. We believe in meaningful partnerships that empower talent and foster collective growth. We dream of making the world a smaller place than the internet has through global collaborations."
    },
    {
      icon: Globe,
      title: "Diversity & Inclusion",
      description: "We represent talent from all walks of life and champion stories that reflect the richness of global culture — a conscious choice that reflects our commitment to representation."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence is not an act, but a mindset we carry into every detail — from the first conversation to the final curtain call. Whether it's booking the right talent, crafting compelling brand narratives, or executing immersive events."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">ClosedLoop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A premium artist and event management company built on the idea that every story deserves a perfect stage.
          </p>
        </div>
      </section>

      {/* Who We Are Section - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">Who We Are</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  ClosedLoop is a premium artist and event management company built on the idea that every story deserves a perfect stage. We specialise in crafting immersive experiences by connecting extraordinary talent with memorable moments, whether through live performances, curated events, or brand-driven activations.
                </p>
                <p>
                  Since our inception, we've worked behind the scenes and under the spotlight to deliver excellence across corporate gatherings, private functions, weddings, concerts, product launches, and influencer events. Our name, ClosedLoop, symbolises the full-circle service we provide from ideation and planning to execution and post-event success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-navy-900/20 rounded-2xl p-8 border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiative Section - Dark */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Our Initiative</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At the heart of ClosedLoop lies a mission to empower the creative ecosystem, giving artists the right platform, helping brands stand out, and delivering unforgettable moments for audiences.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-2xl p-12 border border-gray-600">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              We believe in nurturing long-term relationships with both our clients and our talent, acting as a collaborative partner rather than just a service provider. Through ethical management, innovative planning, and deep cultural understanding, we create events that leave lasting impressions and performances that resonate far beyond the stage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-8">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-navy-900 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Dark */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Why Choose ClosedLoop?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">A Curated Network of Top-Tier Talent</h3>
                <p className="text-gray-300">
                  We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Hands-On Experience Across Diverse Event Types</h3>
                <p className="text-gray-300">
                  Our team brings years of real-world experience in organising and managing a wide spectrum of events, from intimate gatherings to large-scale corporate events and public concerts.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">One-Stop Destination</h3>
                <p className="text-gray-300">
                  ClosedLoop offers a complete ecosystem for entertainment and event services under one roof. You don't need to juggle multiple vendors.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">A Passionate Team</h3>
                <p className="text-gray-300">
                  We're not just planners, we're creators. Our team is made up of passionate individuals who thrive on creativity, collaboration, and delivering extraordinary experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
