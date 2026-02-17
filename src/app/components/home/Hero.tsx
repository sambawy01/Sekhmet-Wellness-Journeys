import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Award, Globe, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';
import heroImage from 'figma:asset/9b9688b83dc3e43bee896345c6fa042c3f3cdd65.png';

export const Hero: React.FC = () => {
  const { t, direction } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isRTL = direction === 'rtl';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const scrollToTreatments = () => {
    const treatmentsSection = document.getElementById('specialties');
    if (treatmentsSection) {
      treatmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[900px] w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Wellness" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay - Supports RTL */}
      <div 
        className={cn(
          "absolute inset-0 z-10",
          isRTL 
            ? "bg-gradient-to-l from-[#0F1923] via-[#0F1923]/85 to-transparent" 
            : "bg-gradient-to-r from-[#0F1923] via-[#0F1923]/85 to-transparent"
        )} 
      />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center max-w-[1440px] h-full">
        <div className={cn(
            "max-w-[800px] space-y-8 pt-20 transition-all duration-1000 ease-out transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            isRTL ? "mr-0 ml-auto text-right" : "ml-0 mr-auto text-left"
          )}>
          
          <h1 className={cn(
              "font-bold text-white leading-[1.1]",
              isRTL ? "font-['Amiri'] text-5xl md:text-8xl" : "font-['Playfair_Display'] text-5xl md:text-7xl"
            )}
          >
            {t("hero.title")}
          </h1>
          
          <p className={cn(
              "text-[#C9A84C] font-medium transition-all duration-1000 delay-200 ease-out transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              isRTL ? "font-['Cairo'] text-xl md:text-3xl" : "font-['DM_Sans'] text-xl md:text-2xl"
            )}
          >
            {t("hero.subtitle")}
          </p>
          
          <div className={cn(
              "flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-400 ease-out transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              isRTL ? "items-end sm:items-center sm:justify-end" : "items-start sm:items-center sm:justify-start"
            )}
          >
            <Link to="/consultation" className={cn(
              "bg-[#C9A84C] text-[#0F1923] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] w-full sm:w-auto text-center inline-block",
              isRTL ? "font-['Cairo']" : "font-['DM_Sans']"
            )}>
              {t("hero.cta.primary")}
            </Link>
            <button 
              onClick={scrollToTreatments}
              className={cn(
              "bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto",
              isRTL ? "font-['Cairo'] flex-row-reverse" : "font-['DM_Sans']"
            )}>
              {t("hero.cta.secondary")}
              <ArrowIcon className={cn("w-5 h-5 transition-transform", isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
            </button>
          </div>
          
          <div className={cn(
              "flex flex-wrap items-center gap-6 md:gap-8 pt-8 border-t border-white/10 mt-8 transition-all duration-1000 delay-700 ease-out",
              isVisible ? "opacity-100" : "opacity-0",
              isRTL ? "justify-end" : "justify-start"
            )}
          >
            <div className={cn("flex items-center gap-2 text-white/90", isRTL && "flex-row-reverse")}>
              <Award className="w-5 h-5 text-[#C9A84C]" />
              <span className={cn("text-sm tracking-wide", isRTL ? "font-['Cairo']" : "font-['DM_Sans']")}>{t("hero.trust")}</span>
            </div>
            
            <div className={cn("flex items-center gap-2 text-white/90", isRTL && "flex-row-reverse")}>
              <Globe className="w-5 h-5 text-[#C9A84C]" />
              <span className={cn("text-sm tracking-wide", isRTL ? "font-['Cairo']" : "font-['DM_Sans']")} suppressHydrationWarning>
                {isRTL ? "جراحون مدربون في المملكة المتحدة" : "UK-Trained Surgeons"}
              </span>
            </div>
            <div className={cn("flex items-center gap-2 text-white/90", isRTL && "flex-row-reverse")}>
              <Clock className="w-5 h-5 text-[#C9A84C]" />
              <span className={cn("text-sm tracking-wide", isRTL ? "font-['Cairo']" : "font-['DM_Sans']")} suppressHydrationWarning>
                {isRTL ? "منسق 24/7" : "24/7 Coordinator"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down */}
      <div className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20 transition-opacity duration-1000 delay-[1.5s]",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        <span className="text-[10px] font-['Space_Mono'] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce text-[#C9A84C]" />
      </div>
    </section>
  );
};
