import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CoreValuesCarousel from '../components/CoreValuesCarousel';
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
      <section className="relative h-screen bg-[#0a1f44]/95 text-white flex flex-col justify-center items-center animate-fade-in-up">
        <div className="container-clean px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Image Block */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative w-[280px] sm:w-[300px] md:w-[340px] h-[260px] sm:h-[280px] md:h-[300px] group">
              {/* Left Image */}
              <img
                src="https://images.unsplash.com/photo-1619067321513-bb55a012e9b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 2"
                className="absolute bottom-0 left-0 w-44 sm:w-52 md:w-60 h-64 sm:h-72 md:h-80 object-cover rounded-xl border border-blue-200 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:z-10 hover:z-20 hover:scale-105"
                style={{
                  transform: 'rotate(-6deg)',
                  transformOrigin: 'bottom left',
                  filter: 'drop-shadow(0 0 20px rgba(147, 197, 253, 0.4))'
                }}
              />

              {/* Right Image */}
              <img
                src="https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 1"
                className="absolute bottom-0 right-0 w-44 sm:w-52 md:w-60 h-64 sm:h-72 md:h-80 object-cover rounded-xl border border-blue-200 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:z-10 hover:z-20 hover:scale-105"
                style={{
                  transform: 'rotate(6deg)',
                  transformOrigin: 'bottom right',
                  filter: 'drop-shadow(0 0 20px rgba(147, 197, 253, 0.4))'
                }}
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="space-y-6 px-4 sm:px-0 animate-fade-in text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl pt-10 text-white drop-shadow-lg font-thin">
              Welcome to
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-lg font-thin text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-100">
                ClosedLoop
              </span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-md">
              Looping Into the Future of Entertainment
            </div>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. From visionary amateurs to world-class performers, we represent, manage, and produce talent that moves audiences worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Light */}
      <section className="relative h-screen bg-white animate-fade-in-up flex items-center justify-center">
        <div className="bg-blue-100 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-md w-full">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Empowering artists and creating unforgettable experiences through innovative entertainment solutions.
            </p>
          </div>

          {/* Vision + Mission Cards */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-blue-800 leading-relaxed">
                To be the leading force in shaping the future of entertainment, creating a world where talent knows no bounds and every story finds its perfect stage.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-blue-800 leading-relaxed">
                To discover, nurture, and elevate exceptional talent while delivering innovative entertainment solutions that captivate audiences and exceed expectations.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Core Values - Dark */}
      <section className="relative bg-[#0a1f44]/95 py-24 animate-fade-in-up overflow-hidden">
        <div className="container-clean">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Principles that guide every decision and relationship at ClosedLoop.
            </p>
          </div>

          <CoreValuesCarousel coreValues={coreValues} />
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
