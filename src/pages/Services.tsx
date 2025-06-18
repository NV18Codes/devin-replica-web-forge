import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Music, Mic, Video, Camera, Calendar, Infinity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Artist Management",
      description: "Comprehensive management services for artists, including career development, brand building, and strategic planning. We handle everything from contract negotiations to social media presence, ensuring our artists can focus on their craft while we take care of the business side."
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Professional music production services, from recording and mixing to mastering. Our state-of-the-art facilities and experienced team help artists bring their musical vision to life with the highest quality standards."
    },
    {
      icon: Mic,
      title: "Event Hosting",
      description: "Expert event hosting and emceeing services for all types of events. Our charismatic hosts ensure smooth event flow, engage audiences, and create memorable experiences for all attendees."
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Full-service video production, including music videos, promotional content, and event coverage. We handle everything from concept development to post-production, delivering high-quality visual content that tells your story."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, artists, and brands. Our photographers capture the perfect moments, whether it's a live performance, corporate event, or personal branding shoot."
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive event planning and management services. From intimate gatherings to large-scale productions, we handle every detail to ensure your event runs smoothly and exceeds expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Unified with About */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black animate-fade-in">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-inter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed font-inter mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive suite of <span className="text-blue-500">services</span> designed to elevate your <span className="text-blue-500">entertainment experience</span> and bring your vision to life.
          </p>
          <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group cursor-loop">
              <div className="animate-infinity-rotate group-hover:animate-infinity-rotate-fast">
                <Infinity
                  size={180}
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

      {/* Visual Accent Image for Services */}
      <section className="bg-white flex justify-center mt-14 py-8 animate-fade-in-up">
        <img
          src="https://images.unsplash.com/photo-1639682687092-0264e96cbb71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Live event production"
          className="w-full max-w-3xl h-56 object-cover rounded-2xl shadow-xl border-4 border-blue-100 hover:border-blue-400 transition-all duration-300"
        />
      </section>

      {/* Services Grid - Light */}
      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl group animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 font-inter">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed font-inter">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Overview - Light */}
      <section className="py-24 bg-gradient-to-br from-black via-blue-900 to-black animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-inter">
              What <span className="text-blue-500">We Offer</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-inter">
              At <span className="text-blue-500">ClosedLoop</span>, we provide a fully integrated suite of <span className="text-blue-500">services</span> designed to support <span className="text-blue-500">artists</span>, <span className="text-blue-500">brands</span>, and <span className="text-blue-500">event organisers</span> at every stage of their journey. Whether you're a rising talent or an established name, we create a continuous loop of <span className="text-blue-500">creative growth</span>, <span className="text-blue-500">visibility</span>, and <span className="text-blue-500">opportunity</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 text-center hover:border-blue-400 transition-all duration-300 hover:shadow-lg group animate-fade-in">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-4 font-inter">For Artists</h3>
              <p className="text-blue-100 font-inter">Comprehensive management, career development, and strategic positioning in the entertainment industry.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 text-center hover:border-blue-400 transition-all duration-300 hover:shadow-lg group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-4 font-inter">For Events</h3>
              <p className="text-blue-100 font-inter">End-to-end event planning, production, and management services for all types of events.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-blue-800 text-center hover:border-blue-400 transition-all duration-300 hover:shadow-lg group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-4 font-inter">For Brands</h3>
              <p className="text-blue-100 font-inter">Creative content production, brand activations, and strategic partnerships in the entertainment space.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up { animation: fadeInUp 1s both; }
      `}</style>
    </div>
  );
};

export default Services;
