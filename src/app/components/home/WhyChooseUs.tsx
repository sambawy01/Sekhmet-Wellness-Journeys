import React from 'react';
import { 
  IconLotus, IconPapyrus, IconPyramid 
} from '../EgyptianIcons';
import { Video, ShieldCheck, Percent } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

const FeatureBlock = ({ icon: Icon, titleKey, descKey, delay }: { icon: any, titleKey: string, descKey: string, delay: number }) => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <div 
      className={cn("bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#0D9488]/10 group opacity-0 animate-fade-in-up", isRTL && "text-right")}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className={cn("w-14 h-14 rounded-full bg-[#F0F7F4] flex items-center justify-center mb-6 group-hover:bg-[#0D9488] transition-colors duration-300", isRTL && "mx-auto")}>
        <Icon className="w-7 h-7 text-[#0D9488] group-hover:text-white transition-colors" />
      </div>
      
      <h3 className={cn("font-sans text-xl font-bold text-[#1A2332] mb-3 group-hover:text-[#0D9488] transition-colors", isRTL && "font-['Cairo']")}>
        {t(titleKey)}
      </h3>
      
      <p className={cn("font-sans text-[#3D3D3D] leading-relaxed text-[15px]", isRTL && "font-['Cairo']")}>
        {t(descKey)}
      </p>
    </div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const features = [
    {
      icon: IconLotus, 
      titleKey: "whyUs.feature1.title",
      descKey: "whyUs.feature1.desc"
    },
    {
      icon: ShieldCheck, 
      titleKey: "whyUs.feature2.title",
      descKey: "whyUs.feature2.desc"
    },
    {
      icon: IconPapyrus, 
      titleKey: "whyUs.feature3.title",
      descKey: "whyUs.feature3.desc"
    },
    {
      icon: Video, 
      titleKey: "whyUs.feature4.title",
      descKey: "whyUs.feature4.desc"
    },
    {
      icon: IconPyramid, 
      titleKey: "whyUs.feature5.title",
      descKey: "whyUs.feature5.desc"
    },
    {
      icon: Percent, 
      titleKey: "whyUs.feature6.title",
      descKey: "whyUs.feature6.desc"
    }
  ];

  return (
    <section className="bg-[#F8FAFB] py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 0v60L30 30zM30 30L60 0v60L30 30z' fill='%23C9A84C' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
       />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn("font-sans text-4xl font-bold text-[#1A2332] relative inline-block", isRTL && "font-['Amiri']")}>
            {t("whyUs.heading")}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#0D9488]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureBlock key={i} icon={f.icon} titleKey={f.titleKey} descKey={f.descKey} delay={i * 0.1} />
          ))}
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
        .animate-fade-in-up {
          animation-name: fadeInUp;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
