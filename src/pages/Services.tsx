import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Music, Mic, Video, Camera, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';


const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Artist Management",
      description:
        "Comprehensive management services for artists, including career development, brand building, and strategic planning. We handle everything from contract negotiations to social media presence, ensuring our artists can focus on their craft while we take care of the business side."
    },
    {
      icon: Music,
      title: "Music Production",
      description:
        "Professional music production services, from recording and mixing to mastering. Our state-of-the-art facilities and experienced team help artists bring their musical vision to life with the highest quality standards."
    },
    {
      icon: Mic,
      title: "Event Hosting",
      description:
        "Expert event hosting and emceeing services for all types of events. Our charismatic hosts ensure smooth event flow, engage audiences, and create memorable experiences for all attendees."
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Full-service video production, including music videos, promotional content, and event coverage. We handle everything from concept development to post-production, delivering high-quality visual content that tells your story."
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Professional photography services for events, artists, and brands. Our photographers capture the perfect moments, whether it's a live performance, corporate event, or personal branding shoot."
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description:
        "Comprehensive event planning and management services. From intimate gatherings to large-scale productions, we handle every detail to ensure your event runs smoothly and exceeds expectations."
    }
  ];

  const imageUrls = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80',
  ];

  const hexagonStyle = {
    clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)'
  };

  const hexPositions = [
    { top: '-130px', left: '50px' },    // Top Left
    { top: '-130px', left: '200px' },   // Top Right
    { top: '0px', left: '-16px' },      // Middle Left
    { top: '0px', left: '270px' },      // Middle Right
    { top: '130px', left: '50px' },     // Bottom Left
    { top: '130px', left: '200px' },    // Bottom Right
    { top: '0px', left: '128px' }       // Center
  ];
const gridRef = useRef(null);
const [visibleCards, setVisibleCards] = useState([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index"));
          setTimeout(() => {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }, index * 300); // 0.3s stagger
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  const cards = gridRef.current?.querySelectorAll(".service-card");
  if (cards) {
    cards.forEach((card, index) => {
      card.setAttribute("data-index", index);
      observer.observe(card);
    });
  }

  return () => observer.disconnect();
}, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[300px] overflow-hidden bg-[#0a1f44]/95 text-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Text Content */}
          <div className="text-left space-y-6 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-inter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Our <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A comprehensive suite of <span className="text-blue-500">services</span> designed to elevate your <span className="text-blue-500">entertainment experience</span> and bring your vision to life.
            </p>
          </div>

          {/* Hexagon Layout */}
          <div className="relative w-[448px] h-[448px] mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {hexPositions.map((pos, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="group w-36 h-36 relative transition-transform duration-500 ease-in-out hover:scale-110">
                  {/* Image clipped inside SVG hexagon */}
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full z-10">
                    <defs>
                      <clipPath id={`hexClip-${idx}`}>
                        <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                      </clipPath>
                    </defs>
                    <image
                      href={imageUrls[idx]}
                      width="150"
                      height="150"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#hexClip-${idx})`}
                    />
                    {/* Animated Stroke */}
                    <polygon
                      points="50,0 93,25 93,75 50,100 7,75 7,25"
                      className="stroke-white stroke-1 fill-none opacity-0 group-hover:opacity-100 animate-loop-draw"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Services Grid */}
      {/* Services Grid */}
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
      ref={gridRef}
    >
      {services.map((service, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl group service-card ${
            visibleCards.includes(index) ? "fade-in-up" : "opacity-0"
          }`}
          data-index={index}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4 font-inter">
            {service.title}
          </h3>
          <p className="text-gray-700 leading-relaxed font-inter">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Overview */}
      <section className="py-24 bg-gradient-to-br from-black via-blue-900 to-black animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-inter">
              What <span className="text-blue-500">We Offer</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-inter">
              At <span className="text-blue-500">ClosedLoop</span>, we provide a fully integrated suite of <span className="text-blue-500">services</span> designed to support <span className="text-blue-500">artists</span>, <span className="text-blue-500">brands</span>, and <span className="text-blue-500">event organisers</span> at every stage of their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[Users, Calendar, Video].map((Icon, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-8 border border-blue-800 text-center hover:border-blue-400 transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-200 mb-4 font-inter">{['For Artists', 'For Events', 'For Brands'][i]}</h3>
                <p className="text-blue-100 font-inter">
                  {[
                    'Comprehensive management, career development, and strategic positioning in the entertainment industry.',
                    'End-to-end event planning, production, and management services for all types of events.',
                    'Creative content production, brand activations, and strategic partnerships in the entertainment space.'
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s both;
  }

   
@keyframes loopDraw {
  0% {
    stroke-dasharray: 50 250;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 50 250;
    stroke-dashoffset: -300;
  }
}

.animate-loop-draw {
  animation: loopDraw 2s linear infinite;
  stroke-dasharray: 50 250;
  stroke-dashoffset: 0;
}

`}</style>



    </div>
  );
};

export default Services;
