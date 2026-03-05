import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

interface CaseData {
  titleKey: string;
  procedureKey: string;
  before: string;
  after: string;
  descriptionKey: string;
}

const cases: CaseData[] = [
  {
    titleKey: "beforeAfter.case1.title",
    procedureKey: "beforeAfter.case1.procedure",
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800&blur=50",
    after: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "beforeAfter.case1.description"
  },
  {
    titleKey: "beforeAfter.case2.title",
    procedureKey: "beforeAfter.case2.procedure",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&blur=50",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "beforeAfter.case2.description"
  },
  {
    titleKey: "beforeAfter.case3.title",
    procedureKey: "beforeAfter.case3.procedure",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&blur=50",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    descriptionKey: "beforeAfter.case3.description"
  }
];

export function BeforeAfterSlider() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const [currentindex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={cn("text-center mb-12", isRTL && "text-right")}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
          >
            {t('beforeAfter.heading')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Outfit'] text-lg text-[#0F172A]/60 max-w-2xl mx-auto"
          >
            {t('beforeAfter.subheading')}
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-[#F9F6F0] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 h-[500px]">
             {/* Before Image (Left) */}
             <div className="relative h-full overflow-hidden group">
               <div className={cn("absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold z-10", isRTL && "left-auto right-4")}>
                 {t('beforeAfter.beforeLabel')}
               </div>
               <img 
                 src={cases[currentindex].before} 
                 alt={t('beforeAfter.beforeAlt')} 
                 className="w-full h-full object-cover filter blur-sm transition-all duration-500 group-hover:blur-none"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-white font-bold text-lg">{t('beforeAfter.hoverToReveal')}</span>
               </div>
             </div>

             {/* After Image (Right) */}
             <div className="relative h-full overflow-hidden">
               <div className={cn("absolute top-4 right-4 bg-[#C5A059] text-white px-3 py-1 rounded-full text-sm font-bold z-10", isRTL && "right-auto left-4")}>
                 {t('beforeAfter.afterLabel')}
               </div>
               <img 
                 src={cases[currentindex].after} 
                 alt={t('beforeAfter.afterAlt')} 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <Button 
              size="icon" 
              onClick={isRTL ? next : prev}
              className="rounded-full bg-white/80 hover:bg-white text-[#0F172A] shadow-lg pointer-events-auto w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              size="icon" 
              onClick={isRTL ? prev : next}
              className="rounded-full bg-white/80 hover:bg-white text-[#0F172A] shadow-lg pointer-events-auto w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Caption */}
          <div className={cn("absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md p-6 border-t border-[#C5A059]/20", isRTL && "text-right")}>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-2">
              {t(cases[currentindex].titleKey)}
            </h3>
            <p className="font-['Outfit'] text-[#0F172A]/60 mb-2 font-medium">
              {t(cases[currentindex].procedureKey)}
            </p>
            <p className="font-['Outfit'] text-sm text-[#0F172A]/60">
              {t(cases[currentindex].descriptionKey)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
