
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-inter">
            About <span className="text-blue-500">ClosedLoop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
            A premium artist and event management company built on the idea that every story deserves a perfect stage.
          </p>
        </div>
      </section>

      {/* Who We Are Section - Light */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 font-inter">Who We Are</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-inter">
                <p>
                  ClosedLoop is a premium artist and event management company built on the idea that every story deserves a perfect stage. We specialise in crafting immersive experiences by connecting extraordinary talent with memorable moments, whether through live performances, curated events, or brand-driven activations.
                </p>
                <p>
                  Since our inception, we've worked behind the scenes and under the spotlight to deliver excellence across corporate gatherings, private functions, weddings, concerts, product launches, and influencer events. Our name, ClosedLoop, symbolises the full-circle service we provide from ideation and planning to execution and post-event success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiative Section - Dark */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-inter">Our Initiative</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter">
              At the heart of ClosedLoop lies a mission to empower the creative ecosystem, giving artists the right platform, helping brands stand out, and delivering unforgettable moments for audiences.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed text-center font-inter">
              We believe in nurturing long-term relationships with both our clients and our talent, acting as a collaborative partner rather than just a service provider. Through ethical management, innovative planning, and deep cultural understanding, we create events that leave lasting impressions and performances that resonate far beyond the stage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section - Light */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 font-inter">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 font-inter">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Dark */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-inter">Why Choose ClosedLoop?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 font-inter">A Curated Network of Top-Tier Talent</h3>
                <p className="text-gray-300 font-inter">
                  We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 font-inter">Hands-On Experience Across Diverse Event Types</h3>
                <p className="text-gray-300 font-inter">
                  Our team brings years of real-world experience in organising and managing a wide spectrum of events, from intimate gatherings to large-scale corporate events and public concerts.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 font-inter">One-Stop Destination</h3>
                <p className="text-gray-300 font-inter">
                  ClosedLoop offers a complete ecosystem for entertainment and event services under one roof. You don't need to juggle multiple vendors.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 font-inter">A Passionate Team</h3>
                <p className="text-gray-300 font-inter">
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
