
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-inter">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-inter">
            Crafted with Creativity. Delivered with Precision.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed font-inter">
            At ClosedLoop, we offer end-to-end services that bridge the gap between talent, audience, and brands. Whether you're planning an intimate evening or a high-profile corporate affair, our team is equipped to turn ideas into experiences.
          </p>
        </div>
      </section>

      {/* Services Grid with alternating colors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-black'}`}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${index % 2 === 0 ? 'bg-black' : 'bg-white'}`}>
                        <service.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-white' : 'text-black'}`} />
                      </div>
                      <div>
                        <h2 className={`text-3xl lg:text-4xl font-bold font-inter ${index % 2 === 0 ? 'text-black' : 'text-white'}`}>{service.title}</h2>
                      </div>
                    </div>
                    
                    <p className={`text-xl font-medium mb-6 font-inter ${index % 2 === 0 ? 'text-blue-600' : 'text-blue-400'}`}>{service.subtitle}</p>
                    <p className={`text-lg mb-8 leading-relaxed font-inter ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>{service.description}</p>
                    
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mr-4 mt-2 flex-shrink-0 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
                          <p className={`font-inter ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className={`rounded-2xl p-8 border ${index % 2 === 0 ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-800'}`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Overview - Light */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 font-inter">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
              At ClosedLoop, we provide a fully integrated suite of services designed to support artists, brands, and event organisers at every stage of their journey. Whether you're a rising talent or an established name, we create a continuous loop of creative growth, visibility, and opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:border-gray-300 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-inter">For Artists</h3>
              <p className="text-gray-600 font-inter">Comprehensive management, career development, and strategic positioning in the entertainment industry.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:border-gray-300 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-inter">For Events</h3>
              <p className="text-gray-600 font-inter">End-to-end event production, talent curation, and technical excellence for memorable experiences.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:border-gray-300 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-inter">For Brands</h3>
              <p className="text-gray-600 font-inter">Strategic partnerships, authentic collaborations, and impactful campaigns that resonate with audiences.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
