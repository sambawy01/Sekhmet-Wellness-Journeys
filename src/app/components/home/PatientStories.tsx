import React from 'react';
import { ArrowLeft, ArrowRight, Star, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

const TestimonialCard = ({ 
  name, age, country, treatment, quote, image, flag, delay 
}: { 
  name: string, age: number, country: string, treatment: string, quote: string, image: string, flag: string, delay: number 
}) => (
  <div 
    className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-[#0D9488] relative min-w-[340px] md:min-w-[380px] h-full flex flex-col opacity-0 animate-fade-in-right"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#F0F7F4]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full cursor-pointer hover:bg-black/30 transition-colors">
          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center pl-1">
             <Play className="w-3 h-3 text-[#0D9488] fill-current" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex gap-1 text-[#0D9488] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <span className="px-3 py-1 bg-[#1A2332] text-white text-[10px] uppercase font-bold tracking-wider rounded-full">
          {treatment}
        </span>
      </div>
    </div>
    
    <blockquote className="font-['Outfit'] italic text-[#3D3D3D] text-[15px] leading-relaxed mb-6 flex-grow">
      "{quote}"
    </blockquote>
    
    <div className="mt-auto pt-6 border-t border-[#F8FAFB]">
      <div className="flex items-center gap-2">
        <span className="text-xl">{flag}</span>
        <div>
          <h4 className="font-['Outfit'] font-bold text-[#1A2332] text-sm">{name}</h4>
          <p className="font-['Outfit'] text-xs text-[#888]">{age} • {country}</p>
        </div>
      </div>
    </div>
  </div>
);

export const PatientStories: React.FC = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const testimonials = [
    {
      name: t("homeStories.patient1.name"),
      age: 34,
      country: t("homeStories.patient1.country"),
      flag: "🇬🇧",
      treatment: t("homeStories.patient1.treatment"),
      quote: t("homeStories.patient1.quote"),
      image: "https://images.unsplash.com/photo-1758337082707-e3fbd71ed461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwd29tYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmclMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMjc1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: t("homeStories.patient2.name"),
      age: 29,
      country: t("homeStories.patient2.country"),
      flag: "🇺🇸",
      treatment: t("homeStories.patient2.treatment"),
      quote: t("homeStories.patient2.quote"),
      image: "https://images.unsplash.com/photo-1763745315951-7daac4821af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwc21pbGluZ3xlbnwxfHx8fDE3NzEyNzUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: t("homeStories.patient3.name"),
      age: 52,
      country: t("homeStories.patient3.country"),
      flag: "🇨🇦",
      treatment: t("homeStories.patient3.treatment"),
      quote: t("homeStories.patient3.quote"),
      image: "https://images.unsplash.com/photo-1634552516330-ab1ccc0f605e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGFwcHklMjBoZWFsdGh5fGVufDF8fHx8MTc3MTI3NTM5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="bg-[#F8FAFB] py-24 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className={cn("flex flex-col md:flex-row justify-between items-end mb-12", isRTL && "flex-row-reverse")}>
          <div className={cn("text-left", isRTL && "text-right md:text-right")}>
            <h2 className={cn("font-['Outfit'] text-4xl font-bold text-[#1A2332] mb-4", isRTL && "font-['Amiri']")}>
              {t("homeStories.heading")}
            </h2>
            <div className={cn("h-1 w-24 bg-[#0D9488]", isRTL && "ml-auto")} />
          </div>
          
          <div className={cn("hidden md:flex gap-2", isRTL && "flex-row-reverse")}>
            <button className="w-12 h-12 rounded-full border border-[#0D9488] flex items-center justify-center text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1A2332] flex items-center justify-center text-white hover:bg-[#0D9488] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {testimonials.map((t, i) => (
             <TestimonialCard key={i} {...t} delay={i * 0.1} />
           ))}
        </div>

        <div className="mt-16 text-center">
            <p className={cn("font-['Space_Mono'] text-sm text-[#1A2332] mb-4")}>
              {t("homeStories.rating")} <span className="text-[#0D9488]">★★★★★</span> {t("homeStories.ratingSubtitle")}
            </p>
            <a href="#" className={cn("font-['Outfit'] font-bold text-[#1A2332] border-b-2 border-[#0D9488] hover:text-[#0D9488] transition-colors", isRTL && "font-['Cairo']")}>
              {t("homeStories.readMore")}
            </a>
        </div>
      </div>
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(20px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-right {
          animation-name: fadeInRight;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
