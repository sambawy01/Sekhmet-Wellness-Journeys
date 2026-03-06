import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';
import { DentalCTA } from '../components/dental/DentalCTA'; // Reuse CTA for now

export function Fertility() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584515933487-9d9fc112e36b?q=80&w=2070&auto=format&fit=crop"
            alt="Newborn baby feet representing fertility success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60"></div>
        </div>

        <div className={cn("relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20", isRTL && "text-right")}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("flex items-center gap-2 text-sm md:text-base mb-6 text-[#F9F6F0]/80 font-sans", isRTL && "flex-row-reverse")}
          >
            <Link to="/" className="hover:text-[#C5A059] transition-colors">{t('common.home')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{t('common.treatments')}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">{t('fertilityPage.hero.title')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight"
          >
            {t('fertilityPage.hero.title')} <br/>
            <span className="text-[#C5A059]">{t('fertilityPage.hero.subtitle')}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed"
          >
            {t('fertilityPage.hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/consultation">
               <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-sans text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg hover:shadow-[#0D9488]/20">
                 {t('fertilityPage.hero.cta')}
               </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Stats */}
      <section className="py-20 bg-[#F0F7F4]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={isRTL ? "md:order-2" : ""}>
              <h2 className={cn("font-['Playfair_Display'] text-4xl text-[#0F172A] font-bold mb-6", isRTL && "text-right")}>
                {t('fertilityPage.whyTitle')}
              </h2>
              <p className={cn("font-sans text-[#5D5D5D] text-lg leading-relaxed mb-8", isRTL && "text-right")}>
                {t('fertilityPage.whyDesc')}
              </p>
              
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={cn("font-sans text-[#0F172A]", isRTL && "text-right")}>{t(`fertilityPage.whyPoints.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={cn("grid grid-cols-2 gap-6", isRTL && "md:order-1")}>
              <div className={cn("bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center")}>
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">{t('fertilityPage.stat.1.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('fertilityPage.stat.1.label')}</span>
              </div>
              <div className={cn("bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center")}>
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">{t('fertilityPage.stat.2.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('fertilityPage.stat.2.label')}</span>
              </div>
              <div className={cn("bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2")}>
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">{t('fertilityPage.stat.3.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('fertilityPage.stat.3.label')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F172A] font-bold mb-4">
              {t('fertilityPage.sectionTitle')}
            </h2>
            <div className="w-24 h-1 bg-[#0D9488] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IVF */}
            <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F0F7F4]">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
                  alt="Microscope lab" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#0F172A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('fertilityPage.proc.ivf.tag')}
                </div>
              </div>
              <div className="p-8">
                <h3 className={cn("font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors", isRTL && "text-right")}>
                  {t('fertilityPage.proc.ivf.title')}
                </h3>
                <p className={cn("font-sans text-[#5D5D5D] mb-6 line-clamp-3", isRTL && "text-right")}>
                  {t('fertilityPage.proc.ivf.desc')}
                </p>
                <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                  <span className="font-heading font-bold text-[#14B8A6]">{t('fertilityPage.proc.ivf.price')}</span>
                  <span className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">{t('fertilityPage.learnMore')}</span>
                </div>
              </div>
            </div>

            {/* Egg Freezing */}
            <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F0F7F4]">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Laboratory cryostorage" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className={cn("font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors", isRTL && "text-right")}>
                  {t('fertilityPage.proc.egg.title')}
                </h3>
                <p className={cn("font-sans text-[#5D5D5D] mb-6 line-clamp-3", isRTL && "text-right")}>
                  {t('fertilityPage.proc.egg.desc')}
                </p>
                <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                  <span className="font-heading font-bold text-[#14B8A6]">{t('fertilityPage.proc.egg.price')}</span>
                  <span className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">{t('fertilityPage.learnMore')}</span>
                </div>
              </div>
            </div>

            {/* Genetic Screening */}
            <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F0F7F4]">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530482054429-cc491f61333b?q=80&w=2071&auto=format&fit=crop" 
                  alt="DNA double helix concept" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className={cn("font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors", isRTL && "text-right")}>
                  {t('fertilityPage.proc.genetic.title')}
                </h3>
                <p className={cn("font-sans text-[#5D5D5D] mb-6 line-clamp-3", isRTL && "text-right")}>
                  {t('fertilityPage.proc.genetic.desc')}
                </p>
                <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                  <span className="font-heading font-bold text-[#14B8A6]">{t('fertilityPage.proc.genetic.price')}</span>
                  <span className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">{t('fertilityPage.learnMore')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DentalCTA />
    </>
  );
}
