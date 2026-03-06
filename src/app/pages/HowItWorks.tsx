import React from 'react';
import { Hero } from '../components/how-it-works/Hero';
import { Timeline } from '../components/how-it-works/Timeline';
import { ComparisonTable } from '../components/how-it-works/ComparisonTable';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function HowItWorks() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <div className={`pt-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      <Hero />
      <Timeline />
      <ComparisonTable />

      {/* CTA Section */}
      <section className="py-24 bg-[#0F172A] text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-6 text-[#F0F7F4] ${isRTL ? 'text-right' : ''}`}>
              {t('howItWorks.title')}
            </h2>
            <p className={`font-sans text-xl text-[#F0F7F4]/80 mb-10 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('howItWorks.subtitle')}
            </p>

            <div className={`flex flex-col sm:flex-row justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link
                to="/consultation"
                className={`inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#B08D55] text-white px-8 py-4 rounded-full text-lg font-sans font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('howItWorks.freeQuote')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-full text-lg font-sans font-bold transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('howItWorks.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
