
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Calendar, Handshake, Monitor, Megaphone, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Artist Management",
      subtitle: "Careers don't just happen — they're built. And we build them right.",
      description: "We offer end-to-end artist management services tailored to each individual's unique vision, goals, and artistic identity.",
      features: [
        "Strategic career planning & long-term development",
        "Booking & contract negotiations",
        "Tour management & logistics",
        "Personal branding & image consulting",
        "Rights management & financial advisory",
        "Mental wellness and career sustainability support"
      ]
    },
    {
      icon: Star,
      title: "Talent Booking",
      subtitle: "The right talent. The right crowd. Every time.",
      description: "ClosedLoop connects event organisers, brands, and venues with a diverse roster of high-calibre performers and influencers.",
      features: [
        "Customised artist curation for events and campaigns",
        "Domestic and international talent sourcing",
        "Corporate, festival, nightlife, and private event bookings",
        "Technical and hospitality rider coordination",
        "Real-time artist availability and response management"
      ]
    },
    {
      icon: Calendar,
      title: "Event Production",
      subtitle: "From concept to curtain call - we create unforgettable moments.",
      description: "Our production team handles events with precision, flair, and creative direction that leaves a lasting impression.",
      features: [
        "Full-service event conceptualisation and planning",
        "Stage and lighting design, AV, and technical coordination",
        "Artist and guest logistics",
        "Creative direction and programming",
        "Staffing, vendor management, and onsite execution",
        "Post-event analytics and impact reporting"
      ]
    },
    {
      icon: Handshake,
      title: "Brand Partnerships",
      subtitle: "Authentic collaborations that amplify both artist and brand.",
      description: "We pair artists with bold, forward-thinking brands to create campaigns, experiences, and content that resonate deeply with audiences.",
      features: [
        "Brand-artist matchmaking and creative integration",
        "Endorsements, campaigns, and experiential marketing",
        "Social media and digital activations",
        "Collaborative content production",
        "Long-term brand ambassadorship development",
        "Negotiations, contracts, and brand protection"
      ]
    },
    {
      icon: Megaphone,
      title: "Media & PR",
      subtitle: "Visibility is power. We craft narratives that break through the noise.",
      description: "In a fast-moving digital world, strategic publicity and media presence are vital.",
      features: [
        "Media relations and press outreach",
        "Social media strategy and growth campaigns",
        "Content creation, storytelling, and branding",
        "Influencer collaborations",
        "Crisis communication & reputation management",
        "Interview coaching and media training"
      ]
    },
    {
      icon: Monitor,
      title: "Production Setup",
      subtitle: "Behind-the-scenes excellence for flawless execution.",
      description: "Our technical services ensure your event is executed with professional precision.",
      features: [
        "Stage design and fabrication",
        "Professional sound and lighting systems",
        "LED screens, visual backdrops",
        "Crew and technical staff coordination",
        "Rehearsal and event-day stage management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.05'%3e%3cpolygon points='30 0 45 15 45 45 30 60 15 45 15 15'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Crafted with Creativity. Delivered with Precision.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At ClosedLoop, we offer end-to-end services that bridge the gap between talent, audience, and brands. Whether you're planning an intimate evening or a high-profile corporate affair, our team is equipped to turn ideas into experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-xl text-purple-300 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
                      <img 
                        src={index === 0 ? "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" :
                             index === 1 ? "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" :
                             index === 2 ? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" :
                             "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"} 
                        alt={service.title} 
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Overview */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At ClosedLoop, we provide a fully integrated suite of services designed to support artists, brands, and event organisers at every stage of their journey. Whether you're a rising talent or an established name, we create a continuous loop of creative growth, visibility, and opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 text-center hover:border-purple-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">For Artists</h3>
              <p className="text-gray-300">Comprehensive management, career development, and strategic positioning in the entertainment industry.</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300">
              <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">For Events</h3>
              <p className="text-gray-300">End-to-end event production, talent curation, and technical excellence for memorable experiences.</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 text-center hover:border-pink-500/50 transition-all duration-300">
              <Handshake className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">For Brands</h3>
              <p className="text-gray-300">Strategic partnerships, authentic collaborations, and impactful campaigns that resonate with audiences.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
