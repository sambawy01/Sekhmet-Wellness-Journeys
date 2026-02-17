import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MessageCircle } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
export const TrustBar: React.FC = () => {
  const { t, direction } = useLanguage();
  return (
    <div className="bg-[#0F1923] text-white h-[48px] flex items-center overflow-hidden w-full relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-full max-w-[1400px]">
        
        {/* Left: Ticker */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
          <motion.div 
            className="flex items-center gap-8 whitespace-nowrap absolute"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              "JCI-Accredited Hospitals",
              "UK & EU Trained Surgeons",
              "24/7 Personal Coordinator",
              "Save Up to 85%",
              "JCI-Accredited Hospitals", // Repeat for seamless loop feeling
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-8 font-['DM_Sans'] text-[13px] tracking-wide">
                <span>{text}</span>
                <span className="text-[#C9A84C] text-[8px]">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Contact & Lang */}
        <div className="flex items-center gap-6 pl-8 bg-[#0F1923] relative z-10 h-full border-l border-white/10">
          <div className="flex items-center gap-2 group cursor-pointer hover:text-[#C9A84C] transition-colors">
            <Phone size={14} className="text-[#C9A84C]" />
            <span className="font-['Space_Mono'] text-[12px] hidden md:inline">+20 100 123 4567</span>
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
            <MessageCircle size={16} className="text-[#C9A84C] cursor-pointer hover:scale-110 transition-transform" />
            <Mail size={16} className="text-[#C9A84C] cursor-pointer hover:scale-110 transition-transform" />
          </div>

          <div className="flex items-center gap-1 font-['DM_Sans'] text-[12px] font-bold border-l border-white/10 pl-6 ml-2 text-[#A89F8E]">
            <span className="text-white cursor-pointer hover:text-[#C9A84C]">EN</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-[#C9A84C]">AR</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-[#C9A84C]">FR</span>
          </div>
        </div>
      </div>
    </div>
  );
};
