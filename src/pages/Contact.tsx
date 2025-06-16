
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
    // Handle form submission here
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
            Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to bring your vision to life? Let's start a conversation about your next event, campaign, or creative project.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, event, or how we can help..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Whether you're an artist looking for representation, a brand seeking creative partnerships, or an event organizer planning something extraordinary, we're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                        <p className="text-purple-300 font-semibold mb-2">{info.info}</p>
                        <p className="text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the ClosedLoop family and experience the difference of working with a team that truly understands the entertainment industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 text-lg font-semibold">
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
