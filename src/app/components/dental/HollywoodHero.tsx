import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../context/LanguageContext';
export function HollywoodHero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xseXdvb2QlMjBzbWlsZSUyMHZlbmVlcnMlMjBsdXh1cnklMjBkZW50YWwlMjBjbGluaWMlMjB3b21hbiUyMHNtaWxpbmclMjB3aGl0ZSUyMHRlZXRofGVufDF8fHx8MTc3MTI3Njg4NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hollywood Smile Makeover"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#0F1923]/60"></div>
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
          <span className="text-[#C5A059]">Hollywood Smile</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-4"
        >
          Hollywood Smile & Veneers in Egypt
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['DM_Sans'] text-lg md:text-xl text-[#C5A059] max-w-2xl"
        >
          Custom-designed porcelain veneers from $180 per tooth — Transform your smile in just 5 days.
        </motion.p>
      </div>
    </section>
  );
}
