import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';
import { DentalCTA } from '../components/dental/DentalCTA';

export function HealthCheckups() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const procedures = [
    {
      titleKey: 'checkups.proc.fullBody.title',
      descKey: 'checkups.proc.fullBody.desc',
      priceKey: 'checkups.proc.fullBody.price',
      tagKey: 'checkups.proc.fullBody.tag',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'checkups.proc.executive.title',
      descKey: 'checkups.proc.executive.desc',
      priceKey: 'checkups.proc.executive.price',
      tagKey: 'checkups.proc.executive.tag',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'checkups.proc.cancer.title',
      descKey: 'checkups.proc.cancer.desc',
      priceKey: 'checkups.proc.cancer.price',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'checkups.proc.cardiac.title',
      descKey: 'checkups.proc.cardiac.desc',
      priceKey: 'checkups.proc.cardiac.price',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'checkups.proc.womens.title',
      descKey: 'checkups.proc.womens.desc',
      priceKey: 'checkups.proc.womens.price',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'checkups.proc.mens.title',
      descKey: 'checkups.proc.mens.desc',
      priceKey: 'checkups.proc.mens.price',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=1920"
            alt={t('checkups.hero.title')}
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
            <span className="text-[#C5A059]">{t('checkups.hero.title')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight">
            {t('checkups.hero.title')} <br /><span className="text-[#C5A059]">{t('checkups.hero.subtitle')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-sans text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed">
            {t('checkups.hero.description')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-sans text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                {t('checkups.hero.cta')}
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
              <h2 className="font-heading text-4xl text-[#0F172A] font-bold mb-6">{t('checkups.whyTitle')}</h2>
              <p className="font-sans text-[#5D5D5D] text-lg leading-relaxed mb-8">
                {t('checkups.whyDesc')}
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-sans text-[#0F172A]">{t(`checkups.whyPoints.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn("grid grid-cols-2 gap-6", isRTL && "rtl")}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className="block font-heading text-4xl font-bold text-[#0F172A] mb-2">{t('checkups.stat.1.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('checkups.stat.1.label')}</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className="block font-heading text-4xl font-bold text-[#0F172A] mb-2">{t('checkups.stat.2.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('checkups.stat.2.label')}</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className="block font-heading text-4xl font-bold text-[#0F172A] mb-2">{t('checkups.stat.3.value')}</span>
                <span className="font-sans text-sm text-[#5D5D5D] uppercase tracking-wide">{t('checkups.stat.3.label')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-[#0F172A] font-bold mb-4">{t('checkups.sectionTitle')}</h2>
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
                  <h3 className="font-heading text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors">{t(proc.titleKey)}</h3>
                  <p className="font-sans text-[#5D5D5D] mb-6 line-clamp-3">{t(proc.descKey)}</p>
                  <div className={cn("flex items-center justify-between border-t border-[#0F172A]/10 pt-6", isRTL && "flex-row-reverse")}>
                    <span className="font-heading font-bold text-[#14B8A6]">{t(proc.priceKey)}</span>
                    <Link to="/consultation" className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">{t('checkups.bookNow')}</Link>
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
