import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
export const TrustSignals: React.FC = () => {
  const { t, direction } = useLanguage();
  // Mock logos since we don't have real asset URLs for specific hospitals
  const LogoPlaceholder = ({ name }: { name: string }) => (
    <div className="h-10 px-4 flex items-center justify-center border border-gray-200 rounded opacity-60 hover:opacity-100 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">
      <span className="font-['DM_Sans'] font-bold text-sm text-center uppercase tracking-wider">{name}</span>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-white to-[#FAF6EF] py-12 border-t border-b border-[#C9A84C]/10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Trust Stats */}
          <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-['Space_Mono'] text-2xl md:text-3xl font-bold text-[#0F1923]">500+</span>
              <span className="font-['DM_Sans'] text-sm text-[#A89F8E] uppercase tracking-wide">Procedures</span>
              <div className="w-full h-0.5 bg-[#C9A84C] mt-2" />
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-['Space_Mono'] text-2xl md:text-3xl font-bold text-[#0F1923]">97%</span>
              <span className="font-['DM_Sans'] text-sm text-[#A89F8E] uppercase tracking-wide">Satisfaction</span>
              <div className="w-full h-0.5 bg-[#C9A84C] mt-2" />
            </div>
          </div>

          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center xl:justify-end gap-6 md:gap-8 flex-grow">
            <LogoPlaceholder name={t("trust.jciAccredited")} />
            <LogoPlaceholder name="Dar Al Fouad" />
            <LogoPlaceholder name="As-Salam Int." />
            <LogoPlaceholder name="Andalusia" />
            <LogoPlaceholder name="Saudi German" />
            <LogoPlaceholder name="Cleopatra" />
          </div>

        </div>
      </div>
    </section>
  );
};
