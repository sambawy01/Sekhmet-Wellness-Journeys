import React from 'react';
import { 
  FileText, MessageSquare, UserCheck, Calendar, Activity, Palmtree, Video 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

export const PatientJourney: React.FC = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const steps = [
    { icon: MessageSquare, titleKey: "journey.step1.title", descKey: "journey.step1.desc" },
    { icon: FileText, titleKey: "journey.step2.title", descKey: "journey.step2.desc" },
    { icon: UserCheck, titleKey: "journey.step3.title", descKey: "journey.step3.desc" },
    { icon: Calendar, titleKey: "journey.step4.title", descKey: "journey.step4.desc" },
    { icon: Activity, titleKey: "journey.step5.title", descKey: "journey.step5.desc" },
    { icon: Palmtree, titleKey: "journey.step6.title", descKey: "journey.step6.desc" },
    { icon: Video, titleKey: "journey.step7.title", descKey: "journey.step7.desc" }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="text-center mb-20">
          <h2 className={cn("font-sans text-4xl font-bold text-[#1A2332] relative inline-block", isRTL && "font-['Amiri']")}>
            {t("journey.heading")}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#0D9488]" />
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-[#F8FAFB]">
            <div 
              className="h-full bg-[#0D9488] animate-grow-width"
              style={{ width: '0%' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <div 
                key={i}
                className={cn("flex flex-col items-center text-center relative z-10 group opacity-0 animate-fade-in-up", isRTL && "text-right")}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0D9488] flex items-center justify-center text-[#0D9488] font-heading font-bold mb-4 shadow-sm group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
                  {i + 1}
                </div>
                
                <div className="mb-3 text-[#1A2332] group-hover:text-[#0D9488] transition-colors duration-300">
                  <step.icon className="w-6 h-6 mx-auto" strokeWidth={1.5} />
                </div>
                
                <h3 className={cn("font-sans font-bold text-[#1A2332] text-lg mb-2", isRTL && "font-['Cairo']")}>{t(step.titleKey)}</h3>
                <p className={cn("font-sans text-sm text-[#888] leading-relaxed max-w-[140px]", isRTL && "font-['Cairo']")}>
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes growWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-fade-in-up {
          animation-name: fadeInUp;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
        .animate-grow-width {
          animation-name: growWidth;
          animation-duration: 1.5s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
