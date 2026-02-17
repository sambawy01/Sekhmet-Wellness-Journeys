import React from 'react';
import { Sun, CloudRain, Clock, ScrollText } from 'lucide-react';
import { IconAnkh } from '../EgyptianIcons';

import { useLanguage } from '../../context/LanguageContext';
export const EgyptEditorial: React.FC = () => {
  const { t, direction } = useLanguage();
  return (
    <section className="bg-[#FAF6EF] py-24 border-t border-[#C9A84C]/10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        {/* Editorial Header */}
        <div className="relative rounded-3xl overflow-hidden mb-20 h-[600px] shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1762530162773-c99f38d4d5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJuYWslMjB0ZW1wbGUlMjBpbnRlcmlvciUyMGNvbHVtbnMlMjBsaWdodHxlbnwxfHx8fDE3NzEyNzUyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 w-full p-12 md:p-24 text-center">
            <h2 
              className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up"
              style={{ animationFillMode: 'forwards' }}
            >
              Where Healing Began
            </h2>
            <div 
              className="h-1 bg-[#C9A84C] mx-auto animate-grow-width-small"
              style={{ width: '0%', animationDelay: '0.3s', animationFillMode: 'forwards' }}
            />
          </div>
        </div>

        {/* 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: History */}
          <div 
            className="space-y-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF6EF] border border-[#C9A84C] flex items-center justify-center">
                <IconAnkh className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#0F1923]">5,000 Years of Medicine</h3>
            </div>
            <p className="font-['DM_Sans'] text-[#3D3D3D] leading-relaxed">
              From the Edwin Smith Papyrus to modern surgery, Egypt has been the cradle of medical innovation. We continue this legacy today.
            </p>
            <div className="flex items-center gap-3 text-[#A89F8E] text-sm font-['Space_Mono'] pt-4 border-t border-[#C9A84C]/10">
              <ScrollText className="w-4 h-4" />
              <span>Edwin Smith Papyrus, c. 1600 BCE</span>
            </div>
          </div>

          {/* Column 2: Modern Excellence */}
          <div 
            className="space-y-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="h-48 rounded-xl overflow-hidden mb-6 shadow-md relative group">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1737216155207-6775db75f625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZ2xhc3MlMjBleHRlcmlvciUyMHN1bm55fGVufDF8fHx8MTc3MTI3NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080')` }}
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#0F1923]">Modern Excellence</h3>
            <p className="font-['DM_Sans'] text-[#3D3D3D] leading-relaxed">
              11 JCI-accredited hospitals. Surgeons trained at the Royal College, Cleveland Clinic, and Stanford, returning to practice in state-of-the-art facilities.
            </p>
          </div>

          {/* Column 3: Climate */}
          <div 
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#C9A84C]/10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <h3 className="font-['Playfair_Display'] text-2xl text-[#0F1923] mb-6">Perfect Healing Climate</h3>
            
            <div className="space-y-6">
              {/* Jan Comparison */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-['DM_Sans'] text-[#888] uppercase tracking-wide">
                  <span>London (Jan)</span>
                  <span>Cairo (Jan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-gray-400" />
                  <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden relative">
                     <div className="w-[20%] h-full bg-gray-400" />
                  </div>
                  <div className="h-2 flex-grow bg-[#FAF6EF] rounded-full overflow-hidden relative">
                     <div className="w-[85%] h-full bg-[#C9A84C]" />
                  </div>
                  <Sun className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div className="flex justify-between font-['Space_Mono'] text-sm font-bold">
                  <span className="text-gray-500">5°C</span>
                  <span className="text-[#C9A84C]">24°C</span>
                </div>
              </div>

              {/* July Comparison */}
               <div className="space-y-2">
                <div className="flex justify-between text-xs font-['DM_Sans'] text-[#888] uppercase tracking-wide">
                  <span>London (Jul)</span>
                  <span>Cairo (Jul)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-gray-400" />
                  <div className="h-2 flex-grow bg-gray-200 rounded-full overflow-hidden relative">
                     <div className="w-[45%] h-full bg-gray-400" />
                  </div>
                  <div className="h-2 flex-grow bg-[#FAF6EF] rounded-full overflow-hidden relative">
                     <div className="w-full h-full bg-[#C9A84C]" />
                  </div>
                  <Sun className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div className="flex justify-between font-['Space_Mono'] text-sm font-bold">
                  <span className="text-gray-500">18°C</span>
                  <span className="text-[#C9A84C]">35°C</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F5F0E5] mt-4">
                 <div className="flex items-center gap-2 text-[#0F1923] text-sm font-['DM_Sans'] font-medium">
                   <Clock className="w-4 h-4 text-[#C9A84C]" />
                   <span>Flight Time: London 4.5h • Dubai 3.5h</span>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes growWidthSmall {
          from { width: 0; }
          to { width: 100px; }
        }
        .animate-fade-in-up {
          animation-name: fadeInUp;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
        }
        .animate-grow-width-small {
          animation-name: growWidthSmall;
          animation-duration: 0.8s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
