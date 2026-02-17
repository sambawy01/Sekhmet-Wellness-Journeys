import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hospital, Calendar, ArrowRight, Bed, Stethoscope, Palmtree, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

interface PackageCardProps {
  image: string;
  name: string;
  tier: 'Comfort' | 'Prestige';
  duration: string;
  price: string;
  ukPrice: string;
  dir?: 'ltr' | 'rtl';
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  image, 
  name, 
  tier, 
  duration, 
  price, 
  ukPrice,
  dir
}) => {
  const { direction } = useLanguage();
  const currentDir = dir || direction;
  const isRTL = currentDir === 'rtl';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const isPrestige = tier === 'Prestige';
  const tierColor = isPrestige ? 'bg-[#0F1923] text-white' : 'bg-[#C9A84C] text-[#0F1923]';

  return (
    <motion.div 
      className="group relative w-[380px] h-[520px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F5F0E5]"
      whileHover={{ y: -6 }}
      dir={currentDir}
    >
      {/* Top Half: Hero Image */}
      <div className="h-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 to-transparent opacity-80" />
        
        {/* Tier Badge */}
        <div className={cn(
          `absolute top-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${tierColor}`,
          isRTL ? "left-4 font-['Cairo']" : "right-4 font-['DM_Sans']"
        )}>
          {tier}
        </div>
      </div>

      {/* Bottom Half: Details */}
      <div className={cn(
        "h-1/2 p-6 flex flex-col justify-between relative",
        isRTL ? "text-right" : "text-left"
      )}>
        {/* Top Info */}
        <div>
          <div className={cn("flex items-start mb-2", isRTL ? "justify-end" : "justify-between")}>
            <h3 className={cn(
              "text-[22px] leading-tight text-[#0F1923] font-medium",
              isRTL ? "font-['Amiri'] pl-4" : "font-['Playfair_Display'] pr-4"
            )}>
              {name}
            </h3>
          </div>
          
          <div className={cn(
            "flex items-center gap-4 text-[#A89F8E] mb-4",
            isRTL && "flex-row-reverse"
          )}>
            <span className={cn(
              "text-[13px] flex items-center gap-1.5",
              isRTL ? "font-['Cairo'] flex-row-reverse" : "font-['DM_Sans']"
            )}>
              <Calendar size={14} />
              {duration}
            </span>
            <div className="flex gap-2">
              <Plane size={14} />
              <Hospital size={14} />
              <Palmtree size={14} />
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="font-['Space_Mono'] font-bold text-[28px] text-[#1B7A6E] leading-none" dir="ltr">
              {/* Force LTR for numbers even in RTL */}
              {price}
            </div>
            <div className={cn(
              "text-[13px] text-[#A89F8E] line-through decoration-[#C84B31]/50 decoration-2",
              isRTL ? "font-['Cairo']" : "font-['DM_Sans']"
            )}>
              {isRTL ? `المقابل في المملكة المتحدة: ${ukPrice}` : `UK Equivalent: ${ukPrice}`}
            </div>
          </div>
        </div>

        {/* Bottom Action & Icons */}
        <div className={cn(
          "flex items-center mt-4 border-t border-[#0F1923]/10 pt-4",
          isRTL ? "flex-row-reverse justify-between" : "justify-between"
        )}>
           {/* Inclusions Icons */}
           <div className="flex gap-3 text-[#C9A84C]">
            <Bed size={16} strokeWidth={2} />
            <Stethoscope size={16} strokeWidth={2} />
            <Palmtree size={16} strokeWidth={2} />
          </div>

          <button className={cn(
            "flex items-center gap-2 text-[#C9A84C] font-bold uppercase tracking-wide group-hover:text-[#B8983B] transition-colors",
            isRTL ? "font-['Cairo'] flex-row-reverse" : "font-['DM_Sans'] text-[14px]"
          )}>
            {isRTL ? "عرض الباقة" : "View Package"} 
            <ArrowIcon size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;

export const PackageShowcase: React.FC = () => {
  return (
    <section className="bg-white p-12 rounded-3xl border border-[#0F1923]/10 space-y-8">
      <div className="border-b border-[#0F1923]/10 pb-4">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Destination Packages</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">All-inclusive medical tourism experiences</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <PackageCard 
          image="https://images.unsplash.com/photo-1641966153139-98999b3eb6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWQlMjBzZWElMjByZXNvcnQlMjBlZ3lwdHxlbnwxfHx8fDE3NzEyNzQzODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          name="Hollywood Smile + Red Sea Recovery"
          tier="Comfort"
          duration="10 Days / 7 Nights"
          price="From $3,999"
          ukPrice="£15,000+"
        />
        <PackageCard 
           image="https://images.unsplash.com/photo-1664591930253-728be8868cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuaWxlJTIwY3J1aXNlJTIwc2hpcHxlbnwxfHx8fDE3NzEyNzQzODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          name="تحول كامل للجسم + رحلة نيلية"
          tier="Prestige"
          duration="١٤ يوم / ١٣ ليلة"
          price="من $8,450"
          ukPrice="£22,000+"
          dir="rtl"
        />
      </div>
    </section>
  );
};
