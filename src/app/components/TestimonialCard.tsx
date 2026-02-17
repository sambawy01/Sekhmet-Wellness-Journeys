import React from 'react';
import { motion } from 'framer-motion';
import { Star, PlayCircle } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
interface TestimonialCardProps {
  image: string;
  name: string;
  country: string;
  quote: string;
  treatment: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  image, 
  name, 
  country, 
  quote, 
  treatment 
}) => {
  const { t, direction } = useLanguage();
  return (
    <motion.div 
      className="relative flex items-center bg-white rounded-xl shadow-lg border-l-4 border-[#C9A84C] overflow-hidden p-6 gap-6 max-w-[400px]"
      whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      {/* Texture Background */}
      <div 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/papyrus.png')] opacity-10 pointer-events-none"
      />

      {/* Profile Image with Play Button */}
      <div className="relative flex-shrink-0">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C9A84C] relative group cursor-pointer">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <PlayCircle className="text-white w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 z-10">
        <div className="flex gap-0.5 mb-2 text-[#C9A84C]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        
        <p className="font-['DM_Sans'] text-[15px] italic text-[#3D3D3D] leading-relaxed mb-4 line-clamp-3">
          "{quote}"
        </p>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-['DM_Sans'] font-bold text-[14px] text-[#0F1923]">{name}</span>
            <span className="text-xs text-[#A89F8E] font-['Space_Mono']">{country}</span>
          </div>
          
          <div className="inline-flex">
            <span className="bg-[#1B7A6E]/10 text-[#1B7A6E] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
              {treatment}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialShowcase: React.FC = () => {
  return (
    <section className="bg-[#FAF6EF] p-12 rounded-3xl space-y-8">
      <div className="border-b border-[#0F1923]/10 pb-4">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Patient Stories</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">Trusted by thousands worldwide</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <TestimonialCard 
          image="https://images.unsplash.com/photo-1565611948073-cb0dd26f233b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMjc0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          name="Sarah M., 34"
          country="🇬🇧 London"
          quote="I saved £8,000 on my dental implants and had the holiday of a lifetime. The care was better than home."
          treatment="Dental Implants"
        />
      </div>
    </section>
  );
};
