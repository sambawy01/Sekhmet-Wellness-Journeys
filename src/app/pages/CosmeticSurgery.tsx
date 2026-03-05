import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';
import { DentalCTA } from '../components/dental/DentalCTA';

export function CosmeticSurgery() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const procedures = [
    {
      titleKey: 'cosmetic.proc.rhinoplasty.title',
      descKey: 'cosmetic.proc.rhinoplasty.desc',
      priceKey: 'cosmetic.proc.rhinoplasty.price',
      tagKey: 'cosmetic.proc.rhinoplasty.tag',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.breastAug.title',
      descKey: 'cosmetic.proc.breastAug.desc',
      priceKey: 'cosmetic.proc.breastAug.price',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.breastReduction.title',
      descKey: 'cosmetic.proc.breastReduction.desc',
      priceKey: 'cosmetic.proc.breastReduction.price',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.liposuction.title',
      descKey: 'cosmetic.proc.liposuction.desc',
      priceKey: 'cosmetic.proc.liposuction.price',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.tummyTuck.title',
      descKey: 'cosmetic.proc.tummyTuck.desc',
      priceKey: 'cosmetic.proc.tummyTuck.price',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.facelift.title',
      descKey: 'cosmetic.proc.facelift.desc',
      priceKey: 'cosmetic.proc.facelift.price',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.eyelid.title',
      descKey: 'cosmetic.proc.eyelid.desc',
      priceKey: 'cosmetic.proc.eyelid.price',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.bbl.title',
      descKey: 'cosmetic.proc.bbl.desc',
      priceKey: 'cosmetic.proc.bbl.price',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'cosmetic.proc.mommy.title',
      descKey: 'cosmetic.proc.mommy.desc',
      priceKey: 'cosmetic.proc.mommy.price',
      image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
            alt="Modern cosmetic surgery clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={cn("flex items-center gap-2 text-sm mb-6 text-[#F9F6F0]/80 font-['Outfit']", isRTL && "flex-row-reverse")}>
            <Link to="/" className="hover:text-[#C5A059] transition-colors">{t('common.home')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{t('common.treatments')}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">{t('cosmetic.hero.title')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className={cn("font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight", isRTL && "text-right")}>
            {t('cosmetic.hero.title')} <br /><span className="text-[#C5A059]">{t('cosmetic.hero.subtitle')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={cn("font-['Outfit'] text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed", isRTL && "text-right")}>
            {t('cosmetic.hero.description')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-['Outfit'] text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                {t('cosmetic.hero.cta')}
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
              <h2 className={cn("font-['Playfair_Display'] text-4xl text-[#0F172A] font-bold mb-6", isRTL && "text-right")}>
                {t('cosmetic.whyTitle')}
              </h2>
              <p className={cn("font-['Outfit'] text-[#5D5D5D] text-lg leading-relaxed mb-8", isRTL && "text-right")}>
                {t('cosmetic.whyDesc')}
              </p>
              <ul className={cn("space-y-4", isRTL && "text-right")}>
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-['Outfit'] text-[#0F172A]">{t(`cosmetic.whyPoints.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className={cn("block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2", isRTL && "text-right")}>
                  {t('cosmetic.stat.1.value')}
                </span>
                <span className={cn("font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide", isRTL && "text-right block")}>
                  {t('cosmetic.stat.1.label')}
                </span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className={cn("block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2", isRTL && "text-right")}>
                  {t('cosmetic.stat.2.value')}
                </span>
                <span className={cn("font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide", isRTL && "text-right block")}>
                  {t('cosmetic.stat.2.label')}
                </span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className={cn("block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2", isRTL && "text-right")}>
                  {t('cosmetic.stat.3.value')}
                </span>
                <span className={cn("font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide", isRTL && "text-right block")}>
                  {t('cosmetic.stat.3.label')}
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
            <h2 className={cn("font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F172A] font-bold mb-4", isRTL && "text-right")}>
              {t('cosmetic.sectionTitle')}
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
                  <h3 className={cn("font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors", isRTL && "text-right")}>
                    {t(proc.titleKey)}
                  </h3>
                  <p className={cn("font-['Outfit'] text-[#5D5D5D] mb-6 line-clamp-3", isRTL && "text-right")}>
                    {t(proc.descKey)}
                  </p>
                  <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                    <span className="font-['Space_Mono'] font-bold text-[#14B8A6]">{t(proc.priceKey)}</span>
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
