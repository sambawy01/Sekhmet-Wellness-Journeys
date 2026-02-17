import React from 'react';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

interface SpecialtyCardProps {
  title: string;
  image: string;
  procedures: string[];
  price: string;
  delay: number;
  link: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ title, image, procedures, price, delay, link }) => {
  const { direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const ArrowIcon = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <Link 
      to={link}
      className="group relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#C9A84C]/20 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up block"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
      dir={direction}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Content */}
      <div className={cn(
        "absolute bottom-0 w-full p-8 flex flex-col justify-end h-full",
        isRTL ? "right-0 text-right" : "left-0 text-left"
      )}>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className={cn(
            "text-3xl text-white mb-2",
            isRTL ? "font-['Amiri']" : "font-['Playfair_Display']"
          )}>
            {title}
          </h3>
          
          <div className={cn(
            "h-0.5 w-12 bg-[#C9A84C] mb-4 group-hover:w-full transition-all duration-500 ease-out",
            isRTL ? "ml-auto" : "mr-auto"
          )} />
          
          <ul className={cn(
            "space-y-1 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100",
            isRTL && "pr-0"
          )}>
            {procedures.map((proc, i) => (
              <li key={i} className={cn(
                "text-white/80 text-sm flex items-center gap-2",
                isRTL ? "font-['Cairo'] flex-row-reverse" : "font-['DM_Sans']"
              )}>
                <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                {proc}
              </li>
            ))}
          </ul>
          
          <div className={cn(
            "flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200",
            isRTL && "flex-row-reverse"
          )}>
            <span className={cn(
              "font-['Space_Mono'] text-[#C9A84C] text-lg font-bold",
              isRTL && "text-right"
            )}>
              {isRTL ? `من ${price}` : `From ${price}`}
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-[#0F1923] transition-colors duration-300">
              <ArrowIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
    </Link>
  );
};

export const SpecialtiesGrid: React.FC = () => {
  const specialties = [
    {
      title: "Dental Care",
      image: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwd2hpdGUlMjB0ZWV0aCUyMHNtaWxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: ["Implants & Veneers", "Hollywood Smile", "Full Mouth Rehab"],
      price: "$250",
      link: "/treatments/dental"
    },
    {
      title: "Vision & Eye Care",
      image: "https://images.unsplash.com/photo-1680730591022-3bfb2bdcaf0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGV5ZSUyMG1hY3JvJTIwYmx1ZSUyMGlyaXMlMjBsaWdodHxlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: ["LASIK / PRK", "Cataract Surgery", "Lens Replacement"],
      price: "$550",
      link: "/consultation?treatment=vision"
    },
    {
      title: "Cosmetic Surgery",
      image: "https://images.unsplash.com/photo-1767396858207-9b9519ff3a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwcm9maWxlJTIwYmVhdXR5JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTI3NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: ["Rhinoplasty", "Breast Augmentation", "Liposuction"],
      price: "$1,800",
      link: "/consultation?treatment=cosmetic"
    },
    {
      title: "Health Checkups",
      image: "https://images.unsplash.com/photo-1720180244339-95e56d52e182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzdGV0aG9zY29wZSUyMG1vZGVybiUyMGhvc3BpdGFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMjc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: ["Full Body MRI", "Cancer Screening", "Heart Health"],
      price: "$450",
      link: "/consultation?treatment=checkup"
    },
    {
      title: "IVF & Fertility",
      image: "https://images.unsplash.com/photo-1760415823716-5626cb617421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMGZlZXQlMjBoYW5kcyUyMHdhcm0lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: ["IVF Cycle", "Egg Freezing", "Genetic Screening"],
      price: "$2,500",
      link: "/treatments/fertility"
    }
  ];

  return (
    <section id="specialties" className="bg-[#FAF6EF] py-24">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F1923] font-bold relative inline-block">
            Our Specialties
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C9A84C] rounded-full" />
          </h2>
          <p className="font-['DM_Sans'] text-[#A89F8E] max-w-2xl mx-auto text-lg pt-4">
            Combining world-class medical expertise with the luxury of ancient Egyptian hospitality.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {specialties.slice(0, 3).map((spec, i) => (
            <SpecialtyCard key={i} {...spec} delay={i * 0.1} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialties.slice(3, 5).map((spec, i) => (
            <SpecialtyCard key={i + 3} {...spec} delay={(i + 3) * 0.1} />
          ))}
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
        .animate-fade-in-up {
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
