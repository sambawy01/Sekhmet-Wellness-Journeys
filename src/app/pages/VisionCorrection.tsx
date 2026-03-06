import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';
import { DentalCTA } from '../components/dental/DentalCTA';

export function VisionCorrection() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const procedures = [
    {
      titleKey: 'vision.proc.lasik.title',
      descKey: 'vision.proc.lasik.desc',
      priceKey: 'vision.proc.lasik.price',
      tagKey: 'vision.proc.lasik.tag',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'vision.proc.prk.title',
      descKey: 'vision.proc.prk.desc',
      priceKey: 'vision.proc.prk.price',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'vision.proc.cataract.title',
      descKey: 'vision.proc.cataract.desc',
      priceKey: 'vision.proc.cataract.price',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'vision.proc.icl.title',
      descKey: 'vision.proc.icl.desc',
      priceKey: 'vision.proc.icl.price',
      image: 'https://images.unsplash.com/photo-1583912267550-d974311a9a6e?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'vision.proc.glaucoma.title',
      descKey: 'vision.proc.glaucoma.desc',
      priceKey: 'vision.proc.glaucoma.price',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'vision.proc.retina.title',
      descKey: 'vision.proc.retina.desc',
      priceKey: 'vision.proc.retina.price',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=1920"
            alt="Eye examination with advanced equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={cn("flex items-center gap-2 text-sm mb-6 text-[#F9F6F0]/80 font-sans", isRTL && "flex-row-reverse")}>
            <Link to="/" className="hover:text-[#C5A059] transition-colors">{t('common.home')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{t('common.treatments')}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">{t('vision.hero.title')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className={cn("font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight", isRTL && "text-right")}>
            {t('vision.hero.title')} <br /><span className="text-[#C5A059]">{t('vision.hero.subtitle')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={cn("font-sans text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed", isRTL && "text-right")}>
            {t('vision.hero.description')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-sans text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                {t('vision.hero.cta')}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F0F7F4]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-16 items-center", isRTL && "text-right")}>
            <div>
              <h2 className={cn("font-heading text-4xl text-[#0F172A] font-bold mb-6", isRTL && "text-right")}>
                {t('vision.whyTitle')}
              </h2>
              <p className={cn("font-sans text-[#5D5D5D] text-lg leading-relaxed mb-8", isRTL && "text-right")}>
                {t('vision.whyDesc')}
              </p>
              <ul className={cn("space-y-4", isRTL && "text-right")}>
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-sans text-[#0F172A]">{t(`vision.whyPoints.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className={cn("block font-heading text-4xl font-bold text-[#0F172A] mb-2", isRTL && "text-right")}>
                  {t('vision.stat.1.value')}
                </span>
                <span className={cn("font-sans text-sm text-[#5D5D5D] uppercase tracking-wide", isRTL && "text-right block")}>
                  {t('vision.stat.1.label')}
                </span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className={cn("block font-heading text-4xl font-bold text-[#0F172A] mb-2", isRTL && "text-right")}>
                  {t('vision.stat.2.value')}
                </span>
                <span className={cn("font-sans text-sm text-[#5D5D5D] uppercase tracking-wide", isRTL && "text-right block")}>
                  {t('vision.stat.2.label')}
                </span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className={cn("block font-heading text-4xl font-bold text-[#0F172A] mb-2", isRTL && "text-right")}>
                  {t('vision.stat.3.value')}
                </span>
                <span className={cn("font-sans text-sm text-[#5D5D5D] uppercase tracking-wide", isRTL && "text-right block")}>
                  {t('vision.stat.3.label')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className={cn("font-heading text-4xl md:text-5xl text-[#0F172A] font-bold mb-4", isRTL && "text-right")}>
              {t('vision.sectionTitle')}
            </h2>
            <div className={cn("w-24 h-1 bg-[#0D9488] mx-auto rounded-full", isRTL && "mr-auto ml-0")} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procedures.map((proc, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F0F7F4]">
                <div className="h-64 overflow-hidden relative">
                  <img src={proc.image} alt={t(proc.titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {proc.tagKey && <div className="absolute top-4 right-4 bg-[#0F172A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{t(proc.tagKey)}</div>}
                </div>
                <div className={cn("p-8", isRTL && "text-right")}>
                  <h3 className={cn("font-heading text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors", isRTL && "text-right")}>
                    {t(proc.titleKey)}
                  </h3>
                  <p className={cn("font-sans text-[#5D5D5D] mb-6 line-clamp-3", isRTL && "text-right")}>
                    {t(proc.descKey)}
                  </p>
                  <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                    <span className="font-heading font-bold text-[#14B8A6]">{t(proc.priceKey)}</span>
                    <Link to="/consultation" className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">
                      {t('vision.getQuote')}
                    </Link>
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
