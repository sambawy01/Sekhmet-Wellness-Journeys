import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

export const TreatmentsHero: React.FC = () => {
  const { direction, t } = useLanguage();
  const isRTL = direction === 'rtl';

  const scrollToTreatments = () => {
    const treatmentsSection = document.getElementById('specialties');
    if (treatmentsSection) {
      treatmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1665231795856-769fb08a90bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZWRpY2FsJTIwd2VsbG5lc3MlMjBtb2Rlcm4lMjBjbGVhbiUyMHNwYSUyMGRvY3RvciUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NzEzMTIwODR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Luxury Medical Treatments" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center max-w-[1440px] h-full">
        <div className={cn(
            "max-w-[800px] space-y-6 text-center mx-auto",
            isRTL ? "font-['Cairo']" : "font-sans"
          )}>
          
          <h1 className={cn(
              "font-bold text-white leading-tight",
              isRTL ? "font-['Amiri'] text-4xl md:text-6xl" : "font-['Playfair_Display'] text-4xl md:text-6xl"
            )}
          >
            {t('treatmentsHero.title')}
          </h1>

          <p className="text-[#0D9488] text-lg md:text-xl font-medium max-w-2xl mx-auto">
            {t('treatmentsHero.description')}
          </p>
          
          <button 
            onClick={scrollToTreatments}
            className="mt-8 bg-[#0D9488] text-[#0F172A] px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 inline-flex items-center gap-2"
          >
            {isRTL ? "عرض جميع التخصصات" : "View All Specialties"}
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
