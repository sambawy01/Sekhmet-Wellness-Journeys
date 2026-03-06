import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';
import { DentalCTA } from '../components/dental/DentalCTA';

export function Wellness() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const procedures = [
    {
      titleKey: 'wellness.proc.hair.title',
      descKey: 'wellness.proc.hair.desc',
      priceKey: 'wellness.proc.hair.price',
      tagKey: 'wellness.proc.hair.tag',
      image: 'https://images.unsplash.com/photo-1585747860019-6e5fc4525805?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'wellness.proc.weightLoss.title',
      descKey: 'wellness.proc.weightLoss.desc',
      priceKey: 'wellness.proc.weightLoss.price',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'wellness.proc.spa.title',
      descKey: 'wellness.proc.spa.desc',
      priceKey: 'wellness.proc.spa.price',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'wellness.proc.physio.title',
      descKey: 'wellness.proc.physio.desc',
      priceKey: 'wellness.proc.physio.price',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'wellness.proc.antiAging.title',
      descKey: 'wellness.proc.antiAging.desc',
      priceKey: 'wellness.proc.antiAging.price',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbec6c?auto=format&fit=crop&q=80&w=1920"
            alt={t('wellness.hero.title')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>
        <div className={cn("relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20", isRTL && "rtl")}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={cn("flex items-center gap-2 text-sm mb-6 text-[#F9F6F0]/80 font-sans", isRTL && "flex-row-reverse")}>
            <Link to="/" className="hover:text-[#C5A059] transition-colors">{t('common.home')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{t('common.treatments')}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">{t('wellness.hero.title')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight">
            {t('wellness.hero.title')} <br /><span className="text-[#C5A059]">{t('wellness.hero.subtitle')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-sans text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed">
            {t('wellness.hero.description')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-sans text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                {t('wellness.hero.cta')}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F0F7F4]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-16 items-center", isRTL && "rtl")}>
            <div>
              <h2 className="font-['Playfair_Display'] text-4xl text-[#0F172A] font-bold mb-6">{t('wellness.whyTitle')}</h2>
              <p className="font-sans text-[#5D5D5D] text-lg leading-relaxed mb-8">
                {t('wellness.whyDesc')}
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-sans text-[#0F172A]">{t(`wellness.whyPoints.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn("grid grid-cols-2 gap-6", isRTL && "rtl")}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">{t('wellness.stat.1.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('wellness.stat.1.label')}</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">{t('wellness.stat.2.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('wellness.stat.2.label')}</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">{t('wellness.stat.3.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('wellness.stat.3.label')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F172A] font-bold mb-4">{t('wellness.sectionTitle')}</h2>
            <div className="w-24 h-1 bg-[#0D9488] mx-auto rounded-full" />
          </div>
          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", isRTL && "rtl")}>
            {procedures.map((proc, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F0F7F4]">
                <div className="h-64 overflow-hidden relative">
                  <img src={proc.image} alt={t(proc.titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {proc.tagKey && <div className={cn("absolute top-4 right-4 bg-[#0F172A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider", isRTL && "left-4 right-auto")}>{t(proc.tagKey)}</div>}
                </div>
                <div className="p-8">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors">{t(proc.titleKey)}</h3>
                  <p className="font-sans text-[#5D5D5D] mb-6 line-clamp-3">{t(proc.descKey)}</p>
                  <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                    <span className="font-heading font-bold text-[#14B8A6]">{t(proc.priceKey)}</span>
                    <Link to="/consultation" className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">{t('vision.getQuote')}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DentalCTA />
    </>
  );
}
