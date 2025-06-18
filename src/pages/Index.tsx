import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Infinity, Users, Star, Target, Zap, Heart, Rocket, Award, Lightbulb } from 'lucide-react';

const coreValues = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Integrity",
    description: "We prioritise transparency, trust, and professionalism in every relationship—with our artists, our clients, and our audiences."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Creativity",
    description: "Innovation drives everything we do. We embrace bold ideas and push the boundaries of what's possible in entertainment."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "We know and believe success is never a solo act. We believe in meaningful partnerships that empower talent and foster collective growth."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Diversity & Inclusion",
    description: "We represent talent from all walks of life and champion stories that reflect the richness of global culture."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "Excellence is not an act, but a mindset we carry into every detail — from the first conversation to the final curtain call."
  }
];

const services = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Artist Management",
    description: "End-to-end artist management services tailored to each individual's unique vision, goals, and artistic identity. Strategic planning, talent development, branding, and personal guidance."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Talent Booking",
    description: "Connects event organisers, brands, and venues with a diverse roster of high-calibre performers and influencers. Custom curation, sourcing, and seamless coordination."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Event Production",
    description: "Full-service event conceptualisation, planning, stage and lighting design, logistics, creative direction, and post-event analytics."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Brand Partnerships",
    description: "Pairing artists with brands for campaigns, experiences, and content. Brand-artist matchmaking, endorsements, and collaborative content production."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Media & PR",
    description: "Strategic publicity, media relations, social media growth, content creation, influencer collaborations, and reputation management."
  }
];

const visionPoints = [
  "Redefining the live event space with a seamless loop between talent, opportunity, and audience experiences.",
  "A world where creative voices are heard, nurtured, and amplified globally.",
  "Every artist has a pathway to create, explore, and collaborate for sustainable success."
];
const missionPoints = [
  "Empowering talent through full-spectrum artist management and strategic partnerships.",
  "Delivering immersive entertainment experiences with expertise in production, promotion, and ticketing.",
  "Guiding careers with precision and building bridges between artistry and opportunity."
];
const whatWeOfferPoints = [
  "Comprehensive artist management and career development",
  "Professional event planning and production services",
  "High-quality video and music production",
  "Expert photography and content creation",
  "Strategic brand partnerships and collaborations",
  "Innovative digital marketing solutions"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gray-900 text-white flex flex-col justify-center items-center py-20 animate-fade-in-up">
        <div className="container-clean grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
              Welcome to ClosedLoop
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md">
              Looping Into the Future of Entertainment
            </div>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
            </p>
          </div>
          <div className="flex items-center justify-center animate-fade-in">
            <div className="relative group cursor-loop">
              {/* Reverted: Main rotating infinity with navy blue stroke and glow */}
              <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                <Infinity
                  size={300}
                  className="transition-all duration-700 hover:scale-110"
                  style={{
                    fill: 'transparent',
                    stroke: '#60a5fa',
                    strokeWidth: 2,
                    filter: 'drop-shadow(0 0 30px #60a5fa)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accent Image for Landing Page */}
      <section className="bg-white flex justify-center py-8 animate-fade-in-up">
        <img 
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=900&h=300&fit=crop" 
          alt="Creative audience" 
          className="w-full max-w-3xl h-56 object-cover rounded-2xl shadow-xl border-4 border-blue-100 hover:border-blue-400 transition-all duration-300" 
        />
      </section>

      {/* Vision & Mission - Light */}
      <section className="section-padding bg-white animate-fade-in-up">
        <div className="container-clean">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering artists and creating unforgettable experiences through innovative entertainment solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl group animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading force in shaping the future of entertainment, creating a world where talent knows no bounds and every story finds its perfect stage.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl group animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To discover, nurture, and elevate exceptional talent while delivering innovative entertainment solutions that captivate audiences and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Dark */}
      <section className="section-padding bg-gradient-to-br from-black via-blue-900 to-black animate-fade-in-up">
        <div className="container-clean">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Principles that guide every decision and relationship at ClosedLoop.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 justify-items-center">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="relative bg-gray-900 border-2 border-blue-800 rounded-3xl px-8 py-10 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-blue-900/20 opacity-60 -z-10 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-400 text-white p-5 rounded-full mb-6 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-200 mb-3 text-center tracking-tight">{value.title}</h3>
                <p className="text-blue-100 text-base text-center mb-2">{value.description.split('. ')[0]}.</p>
                <a href="/about" className="mt-2 text-blue-400 hover:text-blue-300 text-xs">Learn more</a>
                <div className="absolute -inset-1 rounded-3xl border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_24px_0_rgba(59,130,246,0.25)] transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer / Services - Light */}
      <section className="section-padding bg-white animate-fade-in-up">
        <div className="container-clean">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A continuous loop of creative growth, visibility, and opportunity.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {whatWeOfferPoints.map((point, i) => (
              <li
                key={i}
                className="relative flex items-start bg-white border-2 border-blue-100 rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white p-4 rounded-full mr-5 mt-1 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300">
                  <span className="text-2xl">•</span>
                </div>
                <span className="text-gray-900 font-medium text-lg leading-snug">{point}</span>
                <div className="absolute -inset-1 rounded-2xl border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_24px_0_rgba(59,130,246,0.25)] transition-all duration-300 pointer-events-none" />
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <a href="/services" className="btn-primary text-base bg-blue-600 hover:bg-blue-700 border-none">Explore All Services</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark */}
      <section className="section-padding bg-gradient-to-br from-black via-blue-900 to-black animate-fade-in-up">
        <div className="container-clean">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Closed Loop?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 hover:border-blue-400 transition-all duration-300 animate-fade-in">
                <h3 className="text-xl font-bold text-blue-200 mb-4">A Curated Network of Top-Tier Talent</h3>
                <p className="text-blue-100">
                  We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 hover:border-blue-400 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-blue-200 mb-4">Hands-On Experience Across Diverse Event Types</h3>
                <p className="text-blue-100">
                  Our team brings years of real-world experience in organising and managing a wide spectrum of events, from intimate gatherings to large-scale corporate events and public concerts.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 hover:border-blue-400 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-blue-200 mb-4">One-Stop Destination</h3>
                <p className="text-blue-100">
                  ClosedLoop offers a complete ecosystem for entertainment and event services under one roof. You don't need to juggle multiple vendors.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 hover:border-blue-400 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-blue-200 mb-4">A Passionate Team</h3>
                <p className="text-blue-100">
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

export default Index;
