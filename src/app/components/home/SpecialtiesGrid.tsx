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
      className="group relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#0D9488]/20 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up block"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
      dir={direction}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className={cn(
        "absolute bottom-0 w-full p-8 flex flex-col justify-end h-full",
        isRTL ? "right-0 text-right" : "left-0 text-left"
      )}>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className={cn(
            "text-3xl text-white mb-2",
            isRTL ? "font-['Amiri']" : "font-sans"
          )}>
            {title}
          </h3>

          <div className={cn(
            "h-0.5 w-12 bg-[#0D9488] mb-4 group-hover:w-full transition-all duration-500 ease-out",
            isRTL ? "ml-auto" : "mr-auto"
          )} />

          <ul className={cn(
            "space-y-1 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100",
            isRTL && "pr-0"
          )}>
            {procedures.map((proc, i) => (
              <li key={i} className={cn(
                "text-white/80 text-sm flex items-center gap-2",
                isRTL ? "font-['Cairo'] flex-row-reverse" : "font-sans"
              )}>
                <span className="w-1 h-1 rounded-full bg-[#0D9488]" />
                {proc}
              </li>
            ))}
          </ul>

          <div className={cn(
            "flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200",
            isRTL && "flex-row-reverse"
          )}>
            <span className={cn(
              "font-heading text-[#0D9488] text-lg font-bold",
              isRTL && "text-right"
            )}>
              {isRTL ? `من ${price}` : `From ${price}`}
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#0D9488] group-hover:border-[#0D9488] group-hover:text-[#1A2332] transition-colors duration-300">
              <ArrowIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
    </Link>
  );
};

export const SpecialtiesGrid: React.FC = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      title: t("specialties.dental.title"),
      image: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwd2hpdGUlMjB0ZWV0aCUyMHNtaWxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: [t("specialties.dental.proc1"), t("specialties.dental.proc2"), t("specialties.dental.proc3")],
      price: "$250",
      link: "/treatments/dental"
    },
    {
      title: t("specialties.vision.title"),
      image: "https://images.unsplash.com/photo-1680730591022-3bfb2bdcaf0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGV5ZSUyMG1hY3JvJTIwYmx1ZSUyMGlyaXMlMjBsaWdodHxlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: [t("specialties.vision.proc1"), t("specialties.vision.proc2"), t("specialties.vision.proc3")],
      price: "$550",
      link: "/treatments/vision"
    },
    {
      title: t("specialties.cosmetic.title"),
      image: "https://images.unsplash.com/photo-1767396858207-9b9519ff3a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwcm9maWxlJTIwYmVhdXR5JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTI3NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: [t("specialties.cosmetic.proc1"), t("specialties.cosmetic.proc2"), t("specialties.cosmetic.proc3")],
      price: "$1,800",
      link: "/treatments/cosmetic"
    },
    {
      title: t("specialties.checkup.title"),
      image: "https://images.unsplash.com/photo-1720180244339-95e56d52e182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzdGV0aG9zY29wZSUyMG1vZGVybiUyMGhvc3BpdGFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMjc1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: [t("specialties.checkup.proc1"), t("specialties.checkup.proc2"), t("specialties.checkup.proc3")],
      price: "$450",
      link: "/treatments/checkups"
    },
    {
      title: t("specialties.fertility.title"),
      image: "https://images.unsplash.com/photo-1760415823716-5626cb617421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMGZlZXQlMjBoYW5kcyUyMHdhcm0lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzEyNzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      procedures: [t("specialties.fertility.proc1"), t("specialties.fertility.proc2"), t("specialties.fertility.proc3")],
      price: "$2,500",
      link: "/treatments/fertility"
    }
  ];

  return (
    <section id="specialties" className="bg-[#F0F7F4] py-24">
      <div className="container mx-auto px-6 max-w-[1440px]">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-4xl md:text-5xl text-[#1A2332] font-bold relative inline-block">
            {t("specialties.heading")}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#0D9488] rounded-full" />
          </h2>
          <p className="font-sans text-[#64748B] max-w-2xl mx-auto text-lg pt-4">
            {t("specialties.subtitle")}
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
