import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Heart, Award, ArrowRight, Building, Globe, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IconAnkh, IconEyeOfHorus, IconPyramid, IconLotus } from '../components/EgyptianIcons';

const stats = [
  { label: 'Patients Served', value: '2,500+', icon: Users },
  { label: 'Partner Hospitals', value: '12', icon: Building },
  { label: 'Countries Served', value: '30+', icon: Globe },
  { label: 'Satisfaction Rate', value: '99%', icon: Smile },
];

const values = [
  {
    title: 'Transparency',
    description: 'No hidden fees. We provide clear, itemized quotes before you travel.',
    icon: IconEyeOfHorus,
  },
  {
    title: 'Personal Care',
    description: 'From airport pickup to recovery, our concierges are with you every step.',
    icon: Heart,
  },
  {
    title: 'Medical Excellence',
    description: 'We partner only with internationally accredited JCI hospitals and top specialists.',
    icon: Shield,
  },
  {
    title: 'Cultural Bridge',
    description: 'Experience the warmth of Egyptian hospitality with guides who speak your language.',
    icon: IconAnkh,
  },
];

export const About = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E5]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1560159752-d6d7634ebd4c?auto=format&fit=crop&q=80&w=1600" 
          alt="Team of Doctors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl text-white mb-4"
          >
            About Sekhmet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl text-[#C5A059] font-light tracking-wide"
          >
            Heal where history began
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-2 block">Our Mission</span>
            <h2 className="font-playfair text-4xl text-[#0F1923] mb-6 leading-tight">
              Bridging the gap between world-class care and affordability.
            </h2>
            <p className="text-[#3D3D3D] text-lg leading-relaxed mb-6 font-sans">
              We make world-class Egyptian healthcare accessible to the world. Every patient receives the same care, attention, and respect we’d give our own family.
            </p>
            <p className="text-[#3D3D3D] text-lg leading-relaxed font-sans">
              Named after Sekhmet, the ancient Egyptian goddess of healing, our agency is dedicated to restoring health and confidence through expert medical treatments combined with the restorative power of travel.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C5A059]/10 rounded-full z-0" />
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
              alt="Doctor talking to patient" 
              className="relative z-10 rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs hidden md:block border-l-4 border-[#C5A059]">
              <p className="font-playfair italic text-[#0F1923]">"Egypt is not just a destination; it's a journey of renewal."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-4xl text-[#0F1923] mb-6">Our Story</h2>
          <p className="text-[#3D3D3D] text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Founded in 2022 by a team of Egyptian doctors and travel experts, Sekhmet Wellness Journeys was born from a simple observation: patients abroad were overpaying for treatments that Egyptian specialists perform daily with superior outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {[1, 2, 3].map((i) => (
             <div key={i} className="text-center group">
               <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#F5F0E5] group-hover:border-[#C5A059] transition-colors duration-300">
                 <img 
                   src={`https://images.unsplash.com/photo-${i === 1 ? '1537368910025-500b5933a75b' : i === 2 ? '1573496359142-b8d87734a5a2' : '1580489944761-15a19d654956'}?auto=format&fit=crop&q=80&w=400`} 
                   alt="Team Member" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <h3 className="font-playfair text-xl font-bold text-[#0F1923] mb-1">
                 {i === 1 ? "Dr. Omar Farouk" : i === 2 ? "Sarah El-Gendy" : "Karim Mostafa"}
               </h3>
               <p className="text-[#C5A059] font-sans text-sm uppercase tracking-wide mb-2">
                 {i === 1 ? "Medical Director" : i === 2 ? "Head of Concierge" : "Operations Lead"}
               </p>
             </div>
           ))}
        </div>
      </div>

      {/* Values */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#F5F0E5]">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl text-[#0F1923] mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#C5A059] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-[#0F1923] rounded-full flex items-center justify-center text-[#C5A059] mb-6 mx-auto">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#0F1923] mb-3 text-center">{value.title}</h3>
              <p className="text-gray-600 text-sm text-center font-sans leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0F1923] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#C5A059] font-playfair text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-sans text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                <stat.icon size={16} /> {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners & Certifications */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-playfair text-3xl text-[#0F1923] mb-12">Government & Institutional Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos */}
          <div className="flex items-center gap-2 text-xl font-bold text-[#0F1923]">
            <Building size={32} /> Ministry of Health
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-[#0F1923]">
            <Shield size={32} /> JCI Accredited
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-[#0F1923]">
            <Globe size={32} /> Medical Tourism Assoc.
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-[#0F1923]">
            <Award size={32} /> Best in Class 2025
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#C5A059] py-20 px-4 text-center">
        <h2 className="font-playfair text-4xl text-white mb-6">Join Our Team</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-sans">
          Are you a medical professional or travel expert passionate about patient care? We're always looking for talent to join our growing family.
        </p>
        <button className="bg-white text-[#C5A059] font-bold py-3 px-8 rounded-lg hover:bg-[#0F1923] hover:text-white transition-colors shadow-lg">
          View Careers
        </button>
      </div>
    </div>
  );
};
