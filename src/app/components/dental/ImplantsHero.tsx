import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ImplantsHero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1598256989494-01cc7a7f45b5?auto=format&fit=crop&q=80&w=1920" // Placeholder for implant specific
          alt="Dental Implant Procedure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1923]/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm md:text-base mb-6 text-[#F9F6F0]/80 font-['DM_Sans']"
        >
          <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/treatments/dental" className="hover:text-[#C5A059] transition-colors">Treatments</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/treatments/dental" className="hover:text-[#C5A059] transition-colors">Dental</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#C5A059]">Implants</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-4"
        >
          Dental Implants in Egypt
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['DM_Sans'] text-lg md:text-xl text-[#C5A059] max-w-2xl"
        >
          From $250 per implant — Save up to 90% vs UK & US
        </motion.p>
      </div>
    </section>
  );
}
