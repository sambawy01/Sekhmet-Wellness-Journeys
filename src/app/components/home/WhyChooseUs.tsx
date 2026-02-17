import React from 'react';
import { 
  IconLotus, IconPapyrus, IconPyramid 
} from '../EgyptianIcons';
import { Video, ShieldCheck, Percent } from 'lucide-react';

const FeatureBlock = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <div 
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#C9A84C]/10 group opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="w-14 h-14 rounded-full bg-[#FAF6EF] flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors duration-300">
      <Icon className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
    </div>
    
    <h3 className="font-['DM_Sans'] text-xl font-bold text-[#0F1923] mb-3 group-hover:text-[#C9A84C] transition-colors">
      {title}
    </h3>
    
    <p className="font-['DM_Sans'] text-[#3D3D3D] leading-relaxed text-[15px]">
      {description}
    </p>
  </div>
);

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: IconLotus, 
      title: "Hand-in-Hand Care", 
      description: "One personal coordinator from first message to post-return follow-up."
    },
    {
      icon: ShieldCheck, 
      title: "Independent Doctor Matching", 
      description: "We match you to the best specialist across 10+ accredited facilities."
    },
    {
      icon: IconPapyrus, 
      title: "Transparent Pricing", 
      description: "No hidden fees. Your all-inclusive quote covers everything."
    },
    {
      icon: Video, 
      title: "Post-Return Telemedicine", 
      description: "Video follow-ups with your doctor at 1 week, 1 month, 3 months."
    },
    {
      icon: IconPyramid, 
      title: "Recovery Meets Tourism", 
      description: "Heal by the Pyramids. Recover on the Red Sea."
    },
    {
      icon: Percent, 
      title: "Save 60–90%", 
      description: "World-class procedures at a fraction of Western prices."
    }
  ];

  return (
    <section className="bg-[#F5F0E5] py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 0v60L30 30zM30 30L60 0v60L30 30z' fill='%23C9A84C' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
       />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] relative inline-block">
            The Sekhmet Difference
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#C9A84C]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureBlock key={i} icon={f.icon} title={f.title} description={f.description} delay={i * 0.1} />
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
