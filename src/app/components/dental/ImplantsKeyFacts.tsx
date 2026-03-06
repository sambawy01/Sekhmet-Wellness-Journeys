import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Percent, Calendar, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

export function ImplantsKeyFacts() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const stats = [
    {
      icon: CircleDollarSign,
      label: t('implantsKeyFacts.priceRange.label'),
      value: t('implantsKeyFacts.priceRange.value'),
      description: t('implantsKeyFacts.priceRange.description')
    },
    {
      icon: Globe,
      label: t('implantsKeyFacts.ukPrice.label'),
      value: t('implantsKeyFacts.ukPrice.value'),
      description: t('implantsKeyFacts.ukPrice.description')
    },
    {
      icon: Percent,
      label: t('implantsKeyFacts.savings.label'),
      value: t('implantsKeyFacts.savings.value'),
      description: t('implantsKeyFacts.savings.description')
    },
    {
      icon: Calendar,
      label: t('implantsKeyFacts.availability.label'),
      value: t('implantsKeyFacts.availability.value'),
      description: t('implantsKeyFacts.availability.description')
    }
  ];

  return (
    <section className={cn("bg-[#F0F7F4] border-b border-[#C5A059]/20 py-8", isRTL && "rtl")}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm border border-[#C5A059]/10"
            >
              <stat.icon className="w-6 h-6 text-[#C5A059] mb-2" />
              <h3 className="font-heading font-bold text-xl text-[#0F172A]">{stat.value}</h3>
              <p className="font-sans text-xs font-bold uppercase tracking-wide text-[#14B8A6] mb-1">{stat.label}</p>
              <p className="font-sans text-xs text-[#0F172A]/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
