import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@closedloop.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9AM to 6PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Entertainment District, Creative City, CC 12345",
      description: "Our office is open for scheduled meetings"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black animate-fade-in-up">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-inter">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 font-inter">
            Ready to bring your <span className="text-blue-500">vision</span> to life? Let's start a conversation about your next <span className="text-blue-500">event</span>, <span className="text-blue-500">campaign</span>, or <span className="text-blue-500">creative project</span>.
          </p>
          {/* 3D Infinity SVG visual */}
          <div className="w-32 h-32 mx-auto animate-spin-slow mb-4">
            <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="infinity3d" x1="0" y1="0" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
              <path d="M10,25 Q25,0 50,25 Q75,50 90,25 Q75,0 50,25 Q25,50 10,25 Z" stroke="url(#infinity3d)" strokeWidth="6" fill="none" filter="url(#shadow)"/>
              <filter id="shadow" x="-10" y="-10" width="120" height="70">
                <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#60a5fa"/>
              </filter>
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Form and Info - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Form Card */}
          <div className="bg-white/90 rounded-2xl p-10 border-2 border-blue-100 shadow-2xl animate-fade-in-up">
            <h2 className="text-3xl font-bold text-black mb-8 font-inter">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors font-inter"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors font-inter"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors font-inter"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="artist-management">Artist Management</option>
                  <option value="event-production">Event Production</option>
                  <option value="talent-booking">Talent Booking</option>
                  <option value="brand-partnerships">Brand Partnerships</option>
                  <option value="media-pr">Media & PR</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-none font-inter"
                  placeholder="Tell us about your project, event, or how we can help..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-medium shadow-lg hover:shadow-xl font-inter"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          {/* Decorative Accent Image (only on large screens) */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=500&fit=crop" 
              alt="Creative collaboration" 
              className="w-full max-w-xs h-80 object-cover rounded-2xl shadow-xl border-4 border-blue-100 hover:border-blue-400 transition-all duration-300" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-inter">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed font-inter">
            Join the ClosedLoop family and experience the difference of working with a team that truly understands the entertainment industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl font-inter">
              Schedule a Consultation
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg hover:border-gray-500 hover:bg-gray-900 transition-all duration-300 text-lg font-medium font-inter">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
