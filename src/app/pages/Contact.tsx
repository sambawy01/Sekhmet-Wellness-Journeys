import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IconAnkh } from '../components/EgyptianIcons';

import { useLanguage } from '../context/LanguageContext';
export const Contact = () => {
  const { t, direction } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E5] pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#0F1923] mb-4">Get in Touch</h1>
          <div className="flex items-center justify-center gap-2 text-[#C5A059] font-medium font-sans">
            <Clock size={18} />
            <span>We respond to every inquiry within 24 hours</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-[#C5A059]"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-playfair text-3xl text-[#0F1923] mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8 font-sans">
                  Thank you for contacting Sekhmet Wellness Journeys. A member of our concierge team will be in touch shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#C5A059] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0F1923] mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#0F1923] mb-2 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#0F1923] mb-2 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-bold text-[#0F1923] mb-2 uppercase tracking-wide">I'm Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all cursor-pointer"
                  >
                    <option value="">Select a treatment...</option>
                    <option value="dental">Dental Care</option>
                    <option value="cosmetic">Cosmetic Surgery</option>
                    <option value="hair">Hair Transplant</option>
                    <option value="vision">Vision Correction</option>
                    <option value="checkup">General Checkup</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#0F1923] mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all resize-none"
                    placeholder="Tell us about your needs or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C5A059] text-white font-bold py-4 rounded-lg hover:bg-[#B08D4B] transition-colors shadow-lg flex items-center justify-center gap-2 group"
                >
                  Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#0F1923] p-8 md:p-10 rounded-2xl shadow-xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059] opacity-5 rounded-bl-full -mr-10 -mt-10" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#115E59] opacity-10 rounded-tr-full -ml-6 -mb-6" />

               <div className="relative z-10 space-y-8">
                 <div>
                   <h3 className="font-playfair text-2xl text-[#C5A059] mb-6">Contact Information</h3>
                   <div className="space-y-6">
                     <a href="tel:+201000000000" className="flex items-start gap-4 hover:text-[#C5A059] transition-colors group">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                         <Phone size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Call Us</p>
                         <p className="font-mono text-lg">+20 100 000 0000</p>
                       </div>
                     </a>

                     <a href="mailto:hello@sekhmet.com" className="flex items-start gap-4 hover:text-[#C5A059] transition-colors group">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                         <Mail size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Email Us</p>
                         <p className="font-sans text-lg">hello@sekhmet.com</p>
                       </div>
                     </a>

                     <div className="flex items-start gap-4 group">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                         <MapPin size={20} />
                       </div>
                       <div>
                         <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Visit Us</p>
                         <p className="font-sans text-lg">
                           The Nile Tower, Floor 15<br />
                           Corniche El Nil, Maadi<br />
                           Cairo, Egypt
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Map Preview */}
                 <div className="rounded-xl overflow-hidden h-48 relative border border-white/10 group cursor-pointer">
                   <img 
                     src="https://images.unsplash.com/photo-1572252009289-9d53c6d99a47?auto=format&fit=crop&q=80&w=800" 
                     alt="Map location" 
                     className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <button className="bg-white/90 text-[#0F1923] px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-white transition-colors">
                       Open in Google Maps
                     </button>
                   </div>
                 </div>

                 {/* Social Links */}
                 <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                   <span className="text-gray-400 text-sm">Follow our journey</span>
                   <div className="flex gap-4">
                     {/* Social Icons Placeholder */}
                     <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] transition-colors cursor-pointer flex items-center justify-center">
                       <span className="font-bold text-xs">IG</span>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] transition-colors cursor-pointer flex items-center justify-center">
                       <span className="font-bold text-xs">FB</span>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] transition-colors cursor-pointer flex items-center justify-center">
                       <span className="font-bold text-xs">LI</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* FAQ Shortcuts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-lg font-bold mb-4 flex items-center gap-2">
                <IconAnkh className="w-5 h-5 text-[#C5A059]" /> Common Questions
              </h3>
              <div className="space-y-3">
                <Link to="/faq" className="block p-3 rounded-lg hover:bg-[#F5F0E5] text-sm font-medium text-[#0F1923] transition-colors flex justify-between items-center group">
                  How much can I save?
                  <ArrowRight size={16} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/faq" className="block p-3 rounded-lg hover:bg-[#F5F0E5] text-sm font-medium text-[#0F1923] transition-colors flex justify-between items-center group">
                  Is it safe to travel to Egypt?
                  <ArrowRight size={16} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/faq" className="block p-3 rounded-lg hover:bg-[#F5F0E5] text-sm font-medium text-[#0F1923] transition-colors flex justify-between items-center group">
                  What is included in the packages?
                  <ArrowRight size={16} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
