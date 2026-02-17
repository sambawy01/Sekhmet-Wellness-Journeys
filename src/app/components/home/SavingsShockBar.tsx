import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../context/LanguageContext';
export const SavingsShockBar: React.FC = () => {
  const { t, direction } = useLanguage();
  return (
    <section className="bg-[#0F1923] py-10 border-t border-[#C9A84C]/20 border-b border-[#C9A84C]/20 relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C9A84C]/20">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center p-4 group hover:bg-white/5 transition-colors rounded-xl">
            <span className="font-['DM_Sans'] text-[#C9A84C] text-[13px] uppercase tracking-wider mb-2 font-bold">Dental Implant</span>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-['Space_Mono'] text-3xl font-bold text-white">$350</span>
              <span className="font-['DM_Sans'] text-white/40 text-sm">vs</span>
              <span className="font-['Space_Mono'] text-lg text-[#A89F8E] line-through decoration-[#C84B31]">$3,500</span>
            </div>
            <div className="bg-[#C84B31] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-lg shadow-[#C84B31]/20">
              SAVE 90%
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col items-center justify-center p-4 group hover:bg-white/5 transition-colors rounded-xl">
            <span className="font-['DM_Sans'] text-[#C9A84C] text-[13px] uppercase tracking-wider mb-2 font-bold">LASIK (Both Eyes)</span>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-['Space_Mono'] text-3xl font-bold text-white">$550</span>
              <span className="font-['DM_Sans'] text-white/40 text-sm">vs</span>
              <span className="font-['Space_Mono'] text-lg text-[#A89F8E] line-through decoration-[#C84B31]">$5,000</span>
            </div>
            <div className="bg-[#C84B31] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-lg shadow-[#C84B31]/20">
              SAVE 89%
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col items-center justify-center p-4 group hover:bg-white/5 transition-colors rounded-xl">
            <span className="font-['DM_Sans'] text-[#C9A84C] text-[13px] uppercase tracking-wider mb-2 font-bold">Rhinoplasty</span>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-['Space_Mono'] text-3xl font-bold text-white">$3,000</span>
              <span className="font-['DM_Sans'] text-white/40 text-sm">vs</span>
              <span className="font-['Space_Mono'] text-lg text-[#A89F8E] line-through decoration-[#C84B31]">$12,000</span>
            </div>
            <div className="bg-[#C84B31] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-lg shadow-[#C84B31]/20">
              SAVE 75%
            </div>
          </div>
          
          {/* Column 4 */}
          <div className="flex flex-col items-center justify-center p-4 group hover:bg-white/5 transition-colors rounded-xl relative">
            <span className="font-['DM_Sans'] text-[#C9A84C] text-[13px] uppercase tracking-wider mb-2 font-bold">IVF Cycle</span>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-['Space_Mono'] text-3xl font-bold text-white">$2,500</span>
              <span className="font-['DM_Sans'] text-white/40 text-sm">vs</span>
              <span className="font-['Space_Mono'] text-lg text-[#A89F8E] line-through decoration-[#C84B31]">$6,500</span>
            </div>
            <div className="bg-[#C84B31] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-lg shadow-[#C84B31]/20 mb-4">
              SAVE 62%
            </div>
            
            <Link to="/pricing" className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2 text-[#C9A84C] hover:text-white transition-colors font-['DM_Sans'] text-sm font-medium pr-8 pl-4 py-2 border-l border-[#C9A84C]/20">
              See All Prices <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
        </div>
        
        <div className="flex xl:hidden justify-center mt-8 col-span-2">
            <Link to="/pricing" className="flex items-center gap-2 text-[#C9A84C] hover:text-white transition-colors font-['DM_Sans'] text-sm font-medium px-6 py-3 border border-[#C9A84C]/30 rounded-full hover:bg-[#C9A84C]/10">
              See All Prices <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
};
