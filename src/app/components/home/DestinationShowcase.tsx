import React from 'react';
import { ArrowRight, Sun, MapPin } from 'lucide-react';

const DestinationCard = ({ 
  image, city, temp, highlights, badge, delay 
}: { 
  image: string, city: string, temp: string, highlights: string[], badge: string, delay: number 
}) => (
  <div 
    className="relative h-[560px] min-w-[300px] md:min-w-[440px] flex-1 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl hover:-translate-y-4 transition-all duration-500 snap-center shrink-0 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
    
    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white">
      <Sun className="w-4 h-4 text-[#C9A84C]" />
      <span className="font-['DM_Sans'] text-sm font-medium">{temp}</span>
    </div>

    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-[#C9A84C] text-[#0F1923] text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {badge}
        </div>
        
        <h3 className="font-['Playfair_Display'] text-4xl text-white mb-2">{city}</h3>
        <div className="h-1 w-12 bg-[#C9A84C] mb-6 group-hover:w-24 transition-all duration-500" />
        
        <div className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90 font-['DM_Sans'] text-sm">
              <MapPin className="w-3 h-3 text-[#C9A84C]" />
              {h}
            </div>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-[#C9A84C] group-hover:text-white transition-colors font-['DM_Sans'] font-medium text-lg group/btn">
          Explore {city} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export const DestinationShowcase: React.FC = () => {
  return (
    <section className="bg-[#0F1923] py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-bold relative inline-block">
            Where Will You Heal?
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#C9A84C]" />
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory lg:overflow-visible flex-row lg:flex-row gap-4 px-4 pb-8 lg:pb-0 lg:gap-8 lg:px-0 scrollbar-hide">
          <DestinationCard 
            image="https://images.unsplash.com/photo-1719601602172-a01a45a58de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWlybyUyMHNreWxpbmUlMjBuaWxlJTIwdmlldyUyMGx1eHVyeXxlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            city="Cairo"
            temp="25–35°C Year-Round"
            highlights={["Great Pyramids of Giza", "World-Class Hospitals", "Luxury Nile Cruises"]}
            badge="All 5 Treatment Specialties"
            delay={0}
          />
          <div className="hidden lg:block w-px bg-white/10" />
          <DestinationCard 
            image="https://images.unsplash.com/photo-1671739961405-add4f0ece0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzZWElMjBlZ3lwdCUyMGJlYWNoJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3MTI3NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            city="Hurghada"
            temp="300+ Days Sunshine"
            highlights={["Red Sea Riviera", "Luxury Beach Resorts", "Snorkeling & Diving", "Spa Recovery"]}
            badge="Treatment + Recovery from $1,999"
            delay={0.2}
          />
          <div className="hidden lg:block w-px bg-white/10" />
          <DestinationCard 
            image="https://images.unsplash.com/photo-1705765280828-074feefd8aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFybSUyMGVsJTIwc2hlaWtoJTIwcmVzb3J0JTIwcG9vbCUyMGx1eHVyeXxlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            city="Sharm El Sheikh"
            temp="22–28°C Even in Winter"
            highlights={["5-Star All-Inclusive Resorts", "Ras Mohammed Park", "Desert Excursions", "Direct EU Flights"]}
            badge="Premium Recovery Packages"
            delay={0.4}
          />
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 50px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation-name: fadeInUp;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
