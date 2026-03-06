import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  // Mock logos since we don't have real asset URLs for specific hospitals
  const LogoPlaceholder = ({ name }: { name: string }) => (
    <div className="h-10 px-4 flex items-center justify-center border border-gray-200 rounded opacity-60 hover:opacity-100 hover:border-[#0D9488] hover:text-[#0D9488] transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">
      <span className="font-sans font-bold text-sm text-center uppercase tracking-wider">{name}</span>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-white to-[#F0F7F4] py-12 border-t border-b border-[#0D9488]/10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Trust Stats */}
          <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-heading text-2xl md:text-3xl font-bold text-[#1A2332]">500+</span>
              <span className="font-sans text-sm text-[#64748B] uppercase tracking-wide">Procedures</span>
              <div className="w-full h-0.5 bg-[#0D9488] mt-2" />
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-heading text-2xl md:text-3xl font-bold text-[#1A2332]">97%</span>
              <span className="font-sans text-sm text-[#64748B] uppercase tracking-wide">Satisfaction</span>
              <div className="w-full h-0.5 bg-[#0D9488] mt-2" />
            </div>
          </div>

          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center xl:justify-end gap-6 md:gap-8 flex-grow">
            <LogoPlaceholder name="JCI Accredited" />
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
