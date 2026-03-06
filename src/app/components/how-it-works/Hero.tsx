import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export function Hero() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const scrollToTimeline = () => {
    const el = document.getElementById('process-timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1744912739625-1c188aa85c7a?auto=format&fit=crop&q=80&w=1920"
          alt={t('hiw.hero.bgAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hiw.hero.heading')} <span className="text-[#C5A059]">Sekhmet</span>
          </h1>

          <p className="font-sans text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            {t('hiw.hero.description')}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/consultation"
              className={`inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#B08D55] text-white rounded-full px-8 py-4 text-lg font-sans font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('hiw.hero.ctaButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={scrollToTimeline}
              className={`inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0F172A] rounded-full px-8 py-4 text-lg font-sans font-bold transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('hiw.hero.secondaryButton')}
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-8 h-8 opacity-70" />
      </motion.div>
    </section>
  );
}
