import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

interface TreatmentCardProps {
  image: string;
  specialty: string;
  procedures: string[];
  price: string;
  dir?: 'ltr' | 'rtl';
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ image, specialty, procedures, price, dir }) => {
  const { direction } = useLanguage();
  const currentDir = dir || direction;
  const isRTL = currentDir === 'rtl';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.div 
      className="group relative w-[360px] h-[420px] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 ease-out border border-transparent hover:border-[#C9A84C]/50"
      whileHover={{ y: -4 }}
      dir={currentDir}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/90 via-[#0F1923]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content Container */}
      <div className={cn(
        "absolute inset-0 p-8 flex flex-col justify-end z-10",
        isRTL ? "items-end text-right" : "items-start text-left"
      )}>
        
        {/* Specialty Name */}
        <h3 className={cn(
          "font-medium text-[24px] text-white mb-2 leading-tight drop-shadow-sm",
          isRTL ? "font-['Amiri']" : "font-['Playfair_Display']"
        )}>
          {specialty}
        </h3>
        
        {/* Procedures List */}
        <p className={cn(
          "text-[14px] text-white/60 mb-6 font-light tracking-wide line-clamp-2",
          isRTL ? "font-['Cairo']" : "font-['DM_Sans']"
        )}>
          {procedures.join(' · ')}
        </p>
        
        {/* Bottom Row: Price & Action */}
        <div className={cn(
          "w-full flex items-end border-t border-[#C9A84C]/30 pt-4 mt-auto",
          isRTL ? "flex-row-reverse" : "flex-row justify-between"
        )}>
          <div className={cn("flex flex-col", isRTL ? "items-end" : "items-start")}>
            <span className={cn(
              "text-[10px] text-[#C9A84C] uppercase tracking-widest mb-1",
              isRTL ? "font-['Cairo']" : "font-['DM_Sans']"
            )}>
              {isRTL ? "يبدأ من" : "Starting From"}
            </span>
            <span className="font-['Space_Mono'] font-bold text-[18px] text-[#C9A84C]">
              {price}
            </span>
          </div>
          
          <div className={cn(
            "flex items-center gap-2 text-white opacity-0 transition-all duration-300 delay-75 group-hover:opacity-100",
            isRTL 
              ? "flex-row-reverse transform translate-x-[10px] group-hover:translate-x-0 mr-auto" 
              : "transform translate-x-[-10px] group-hover:translate-x-0 ml-auto"
          )}>
            <span className={cn(
              "text-[12px] font-bold uppercase tracking-wider",
              isRTL ? "font-['Cairo']" : "font-['DM_Sans']"
            )}>
              {isRTL ? "اكتشف" : "Explore"}
            </span>
            <ArrowIcon size={14} className="text-[#C9A84C]" />
          </div>
        </div>
      </div>
      
      {/* Hover Border Glow Effect */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-[#C9A84C]/50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default TreatmentCard;

export const CardShowcase: React.FC = () => {
  const cards = [
    {
      specialty: "Dental Care",
      procedures: ["Implants", "Veneers", "Hollywood Smile"],
      price: "$250",
      image: "https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvciUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzEyNzQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      specialty: "Vision & Eye Care",
      procedures: ["LASIK", "Cataract Surgery", "Lens Replacement"],
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1682663947014-445b091292e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBleWUlMjBjYXJlJTIwY2xpbmljJTIwbW9kZXJuJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTI3NDIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      specialty: "Cosmetic Surgery",
      procedures: ["Rhinoplasty", "Facelift", "Body Contouring"],
      price: "$3,500",
      image: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhZXN0aGV0aWMlMjBzdXJnZXJ5JTIwY2xpbmljJTIwc3BhJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzcxMjc0MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const arabicCard = {
    specialty: "زراعة الأسنان",
    procedures: ["زراعة الأسنان", "الفينير", "ابتسامة هوليوود"],
    price: "$250",
    image: "https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvciUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzEyNzQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <section className="bg-[#FAF6EF] p-12 rounded-3xl space-y-12">
      <div className="border-b border-[#0F1923]/10 pb-4 mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Treatment Specialty Cards</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">Service highlights & navigation</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <TreatmentCard key={index} {...card} />
        ))}
      </div>

      <div className="border-t border-[#0F1923]/10 pt-8 mt-12">
         <h3 className="font-['Playfair_Display'] text-2xl text-[#0F1923] mb-6">Arabic RTL Version</h3>
         <div className="flex flex-wrap justify-center gap-8">
            <TreatmentCard {...arabicCard} dir="rtl" />
         </div>
      </div>
    </section>
  );
};
