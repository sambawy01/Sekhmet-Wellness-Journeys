import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '../../context/LanguageContext';
export function DentalHero() {
  const { t, language, direction } = useLanguage();

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG9zZSUyMHVwJTIwc21pbGUlMjBwZXJmZWN0JTIwdGVldGglMjBsdXh1cnl8ZW58MXx8fHwxNzcxMjc2MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Close up of perfect smile"
          className="w-full h-full object-cover"
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
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Treatments</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#C5A059]">Dental Care</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-4"
        >
          Dental Care
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['DM_Sans'] text-lg md:text-xl text-[#C5A059] max-w-2xl"
        >
          World-class dental procedures at 75–90% savings
        </motion.p>
      </div>
    </section>
  );
}
