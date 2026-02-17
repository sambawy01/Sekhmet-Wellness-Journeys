import React from 'react';
import { ArrowLeft, ArrowRight, Star, Play } from 'lucide-react';

const TestimonialCard = ({ 
  name, age, country, treatment, quote, image, flag, delay 
}: { 
  name: string, age: number, country: string, treatment: string, quote: string, image: string, flag: string, delay: number 
}) => (
  <div 
    className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-[#C9A84C] relative min-w-[340px] md:min-w-[380px] h-full flex flex-col opacity-0 animate-fade-in-right"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FAF6EF]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full cursor-pointer hover:bg-black/30 transition-colors">
          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center pl-1">
             <Play className="w-3 h-3 text-[#C9A84C] fill-current" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex gap-1 text-[#C9A84C] mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <span className="px-3 py-1 bg-[#0F1923] text-white text-[10px] uppercase font-bold tracking-wider rounded-full">
          {treatment}
        </span>
      </div>
    </div>
    
    <blockquote className="font-['DM_Sans'] italic text-[#3D3D3D] text-[15px] leading-relaxed mb-6 flex-grow">
      "{quote}"
    </blockquote>
    
    <div className="mt-auto pt-6 border-t border-[#F5F0E5]">
      <div className="flex items-center gap-2">
        <span className="text-xl">{flag}</span>
        <div>
          <h4 className="font-['DM_Sans'] font-bold text-[#0F1923] text-sm">{name}</h4>
          <p className="font-['DM_Sans'] text-xs text-[#888]">{age} • {country}</p>
        </div>
      </div>
    </div>
  </div>
);

export const PatientStories: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: 34,
      country: "London",
      flag: "🇬🇧",
      treatment: "Dental Implants",
      quote: "I saved over £8,000 on my full mouth reconstruction. The clinic in Cairo was more modern than my dentist in Kensington, and I spent a week in Hurghada afterwards.",
      image: "https://images.unsplash.com/photo-1758337082707-e3fbd71ed461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwd29tYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmclMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMjc1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "James D.",
      age: 29,
      country: "New York",
      flag: "🇺🇸",
      treatment: "LASIK",
      quote: "The procedure took 15 minutes and cost 10% of what I was quoted in NYC. My vision is now 20/20 and I got to see the Pyramids with perfect sight the next day.",
      image: "https://images.unsplash.com/photo-1763745315951-7daac4821af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwc21pbGluZ3xlbnwxfHx8fDE3NzEyNzUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Elena R.",
      age: 52,
      country: "Toronto",
      flag: "🇨y",
      treatment: "Facelift",
      quote: "The surgeon was trained at Cleveland Clinic and the results are so natural. The recovery villa by the Red Sea was basically a 5-star spa. Incredible value.",
      image: "https://images.unsplash.com/photo-1634552516330-ab1ccc0f605e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGFwcHklMjBoZWFsdGh5fGVufDF8fHx8MTc3MTI3NTM5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="bg-[#F5F0E5] py-24 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-left">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-4">
              Real Patients. Real Stories.
            </h2>
            <div className="h-1 w-24 bg-[#C9A84C]" />
          </div>
          
          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#0F1923] flex items-center justify-center text-white hover:bg-[#C9A84C] transition-colors">
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
            <p className="font-['Space_Mono'] text-sm text-[#0F1923] mb-4">
              4.8/5 <span className="text-[#C9A84C]">★★★★★</span> Average Rating | 200+ Verified Reviews
            </p>
            <a href="#" className="font-['DM_Sans'] font-bold text-[#0F1923] border-b-2 border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              Read All Stories →
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
